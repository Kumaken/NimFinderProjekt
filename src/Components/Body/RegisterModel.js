//Basic Dependency:
import React from "react";
//Bootstrap Dependency:
import {
    Jumbotron,
  }  from 'react-bootstrap';
//Component Dependency:
import UserDataModel from './UserDataModel.js';


//class Components:
class RegisterModel extends React.Component{
    constructor (props) {
        super(props);

        //Bindings:
        this.registerPageLayout = this.registerPageLayout.bind(this);
    }



    registerPageLayout(){
        return(
            <Jumbotron>
                <p> Register ASSHOLE </p>
                <UserDataModel setterAction={this.props.setterAction} purpose={'register'} />
            </Jumbotron>
        )
    }

    render(){
        return( 
            <>
                {this.registerPageLayout()}
            </>
        )
    }
}


//expose this .js file so it can be imported by other modules:
export default RegisterModel