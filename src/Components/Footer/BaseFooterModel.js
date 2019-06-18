//Basic Dependency:
import React from "react";
//Bootstrap Dependency:
import {
    Navbar,
  }  from 'react-bootstrap';

//Class Components:
class FooterInstance extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark" fixed="bottom">
                <Navbar.Brand href="#home" >
                <img
                    alt=""
                    src="./favicon.ico"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {'NimFinderProjekt created by Abel Stanley @2019, All rights reserved'}
                </Navbar.Brand>
            </Navbar>
        )
    }
}

class BaseFooterModel extends React.Component{
    //main render method:
    render(){
        return(
            <FooterInstance />
        ) 
    }
}

//expose this .js file so it can be imported by other modules:
export default BaseFooterModel