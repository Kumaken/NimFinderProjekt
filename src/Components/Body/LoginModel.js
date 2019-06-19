//Basic Dependency:
import React from "react";
//Bootstrap Dependency:
import {
    Jumbotron,
  }  from 'react-bootstrap';
//Component Dependency:
import UserDataModel from './UserDataModel.js';


//class Components:
class LoginModel extends React.Component{
    constructor (props) {
        super(props);

        //Bindings:
        this.loginPageLayout = this.loginPageLayout.bind(this);
    }



    loginPageLayout(){
        return(
            <Jumbotron>
                <p> LOGIN ASSHOLE </p>
                <UserDataModel setterAction={this.props.setterAction} purpose={'login'} />
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