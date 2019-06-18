//Basic Dependency:
import React from "react";

//Class Components:
class RequestController extends React.Component{
    //attributes:
    static baseURL = 'https://api.stya.net/nim/';
    static defaultPageTitle = 'home';

    static registerRequest(setterAction){
        //Data to be sent:
        let dataDetails = {
            'username' : 'haisayang31',
            'password' : 'sayangkuditepijurangLDR'
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
        fetch(RequestController.baseURL+'register', 
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
                    console.log(response);
                    setterAction(RequestController.defaultPageTitle,response);
                })
    }

    //Login Request:
    static loginRequest(setterAction){
        //Data to be sent:
        let dataDetails = {
            'username' : 'haisayang31',
            'password' : 'sayangkuditepijurangLDR'
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
        fetch(RequestController.baseURL+'login', 
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
                    console.log(response);
                    setterAction(RequestController.defaultPageTitle,response);
                })
    }

    //Get Request:
    static getRequest(setterAction, receivedToken){
        //Finally: do the fetch request!
        fetch(RequestController.baseURL+'byname?name=Jason&count=2', 
            {
                method: 'GET',
                headers: {
                    'Auth-Token': receivedToken
                },
        
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    setterAction(RequestController.defaultPageTitle,response);
                })
    }
}

//expose this .js file so it can be imported by other modules:
export default RequestController