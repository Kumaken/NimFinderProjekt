//Basic Dependency:
import React from "react";
//Component Dependencies:
import RequestController from './RequestController';

//Class Components:
class ClickHandlers extends React.Component{
    static handleClickRegister(setter){
        RequestController.registerRequest(setter);
    }

    static handleClickLogin(setter){
        RequestController.loginRequest(setter);
    }

    static handleClickByName(setter, token){
        RequestController.getRequest(setter, token);
    }
}

//expose this .js file so it can be imported by other modules:
export default ClickHandlers

