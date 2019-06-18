//Basic Dependency:
import React from "react";
//import Styles from './../Styles/Style.css'; //import is needed for the styling to work
//Bootstrap Dependencies:
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
    InputGroup,
    FormControl
  }  from 'react-bootstrap';
  
class UserLoginDataModel extends React.Component{
    render(){
        return(
            <>
                <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Username :</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Password &nbsp;:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            placeholder="Password"
                            aria-label="Password    "
                            aria-describedby="basic-addon1"
                            />
                </InputGroup>
            </>
        )
    }
}

//expose this .js file so it can be imported by other modules:
export default UserLoginDataModel