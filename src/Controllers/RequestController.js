//Basic Dependency:
import React from "react";
//Module Dependency:
import RefreshController from './RefreshController';

//Class Components:
class RequestController extends React.Component{
    constructor(builder){
        super();
        //Attributes
        this.baseURL = builder.baseURL;
        this.pageTitle = builder.pageTitle;
        this.username = builder.username;
        this.password = builder.password;
        this.purpose = builder.purpose;
        this.setter = builder.setter;
        this.token = builder.token;
        this.searchString = builder.searchString;
        this.count = builder.count;
        this.notifyOK = builder.notifyOK;
        this.notifyFail = builder.notifyFail;
        this.pageOffset = builder.pageOffset;
        this.searchString = builder.searchString;
        //Bindings:
        this.loginRequest = this.loginRequest.bind(this);
    }

    requestLogic(){
        RefreshController.setterLoadingState();
        if (this.purpose === 'login')
            this.loginRequest();
        else if (this.purpose === 'register')
            this.registerRequest();
        else
            this.getRequest();
    }

    registerRequest(){
        //Data to be sent:
        let dataDetails = {
            'username' : this.username,
            'password' : this.password
        }
        //Create  x-www-form-urlencoded payload:
        let formBody = [];
        for (let property in dataDetails){
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(dataDetails[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        //Finally: do the fetch request!
        fetch(this.baseURL+'register', 
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: formBody
            })
                .then(response => response.json())
                .then(response => {
                    if(response.status === "OK"){
                        this.notifyOK('register');
                    }
                    else{
                        this.notifyFail('register');
                    }
                    console.log(response);
                    this.setter(this.pageTitle,response,null);
                })
    }

    //Login Request:
    loginRequest(){
        //Data to be sent:
        console.log(this.notifyOK);
        let dataDetails = {
            'username' : this.username,
            'password' : this.password
        }
        //Create  x-www-form-urlencoded payload:
        let formBody = [];
        for (let property in dataDetails){
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(dataDetails[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        //Finally: do the fetch request!
        fetch(this.baseURL+'login', 
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: formBody
            })
                .then(response => response.json())
                .then(response => {
                    if(response.status === "OK")
                        this.notifyOK('login');
                    else
                        this.notifyFail('login');
                    console.log(response);
                    this.setter(this.pageTitle,response,this.username);
                })
    }

    //Get Request:
    async getRequest(){
        //Finally: do the fetch request!
        console.log(this.searchString)
        console.log(this.pageOffset)
        //if there's a NaN character in the searchString, call byName API
        let url = '';
        if(isNaN(this.searchString))
            url = `${this.baseURL}byname?name=`;
        else
            url = `${this.baseURL}byid?query=`;
        await fetch(`${url}${this.searchString}&count=${this.count}&page=${this.pageOffset}`, 
            {
                method: 'GET',
                headers: {
                    'Auth-Token': this.token
                },
        
            })
                .then(response => response.json())
                .then(response => {
                    if(response.status === "OK")
                        this.notifyOK('search');
                    else
                        this.notifyFail('search');
                    console.log(response);
                    this.setter('search',response,null, null, this.searchString);
                })
    }
}

//expose this .js file so it can be imported by other modules:
export default RequestController;