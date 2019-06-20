//Basic Dependency:
import React from "react";
//Bootstrap Dependencies:
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
    Navbar,
    Nav,
    NavDropdown,
  }  from 'react-bootstrap';
//Components Dependencies:
import AccountModal from './../Body/AccountModal';


class NavbarInstance2 extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark" sticky="top">
                <Nav.Link onClick={() => this.props.setterAction('home', null)}>
                <img
                    alt=""
                    src="./favicon.ico"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' NIM FINDER PROJEKT '}
                </Nav.Link>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link onClick={() => this.props.setterAction('search')}>Hunt for your crush's NIM</Nav.Link>
                    <Nav.Link onClick={() => this.props.setterAction('about')}>About MI</Nav.Link>
                    <NavDropdown title="Account-Control" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.props.setterAction('login')}>Login</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => this.props.setterAction('register')}>Register</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    {console.log(this.props.currentUser)}
                    <AccountModal currentUser={this.props.currentUser} setterAction={this.props.setterAction}/>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
//Class Components:
class BaseHeaderModel extends React.Component{
    render(){
        return(
            <NavbarInstance2 currentUser={this.props.currentUser} setterAction={this.props.setterAction}></NavbarInstance2>
        )
    }
}

//expose this .js file so it can be imported by other modules:
export default BaseHeaderModel