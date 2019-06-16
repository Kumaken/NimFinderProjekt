//Basic Dependency:
import React from "react";

//Class Components:
class RequestController extends React.Component{

    static registerRequest(setterAction1, setterAction2){
        //attributes:
        this.baseURL = 'https://api.stya.net/nim/';
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
                    setterAction2(response);
                    console.log(response);
                    setterAction1();
                })
    }
}

//expose this .js file so it can be imported by other modules:
export default RequestController