//Basic Dependency:
import React from "react";
//import Styles from './../Styles/Style.css'; //import is needed for the styling to work
//Bootstrap Dependencies:
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
    Navbar,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button
  }  from 'react-bootstrap';
  
  class NavbarInstance extends React.Component {
    
    render() {
      return (
        <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Navbar.Brand href="#home">NIM Finder Projekt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Hunt for your crush's NIM</Nav.Link>
            <Nav.Link href="#link">Question Me a.k.a. the one who gave you a kick on your coward ass to go talk to your crush</Nav.Link>
            <NavDropdown title="DON'T LET THIS DROP DOWN" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">(Boobs)(Boobs)</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Solar Plexus</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Belly . Button</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Majestic Genitalia</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">I told you, you fucking pervert</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="||||||||||||||||||||||||||||||||||||||||||||||" className="mr-sm-2" />
            <Button variant="outline-success">Battery Left: 100%</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
      );
    }
  }

class NavbarInstance2 extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="./favicon.ico"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                {' NIM FINDER PROJEKT '}
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link onClick={() => this.props.setterAction('home', null)}>Hunt for your crush's NIM</Nav.Link>
                    <Nav.Link onClick={() => this.props.setterAction('about', null)}>About MI</Nav.Link>
                    <NavDropdown title="Account-Control" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => this.props.setterAction('login', null)}>Login</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => this.props.setterAction('register', null)}>Register</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="||||||||||||||||||||||||||||||||||||||||||||||" className="mr-sm-2" />
                    <Button variant="outline-success">Battery Left: 100%</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
//Class Components:
class BaseHeaderModel extends React.Component{
    render(){
        return(
            <NavbarInstance2 setterAction={this.props.setterAction}></NavbarInstance2>
        )
    }
}

//expose this .js file so it can be imported by other modules:
export default BaseHeaderModel