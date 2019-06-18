//Basic Dependency:
import React from "react";
//request dependency:
import RequestController from '../../Controllers/RequestController';
//Bootstrap Dependency:
import {
    Jumbotron,
    InputGroup,
    FormControl,
    Button
  }  from 'react-bootstrap';
//Component Dependency:
import StudentInfoModel from './StudentInfoModel.js';
import BaseHomeModel from './BaseHomeModel.js';
import UserDataLoginModel from './UserDataLoginModel.js';
import ClickHandlers from "../../Controllers/ClickHandlers";

//class Components:
class LoginModel extends React.Component{
    constructor (props) {
        super(props);
        this.loginPageLayout = this.loginPageLayout.bind(this);
    }

    loginPageLayout(){
        return(
            <Jumbotron>
                <p> LOGIN ASSHOLE </p>
                <UserDataLoginModel />
                {console.log(BaseHomeModel.handleClickLogin)}
                <Button variant="primary" onClick={() => ClickHandlers.handleClickLogin(this.props.setterAction)}>LOGIN</Button>
            </Jumbotron>
        )
    }

    render(){
        return( 
            <>
                {this.loginPageLayout()}
            </>
        )
    }
}


//expose this .js file so it can be imported by other modules:
export default LoginModel