//Basic Dependency:
import React from "react";

//Bootstrap Dependencies:
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
    InputGroup,
    FormControl,
    Button
  }  from 'react-bootstrap';

//Components Dependency
//import ClickHandlers from "../../Controllers/ClickHandlers";
import ControllerBuilder from "./../../Controllers/ControllerBuilder";

class UserDataModel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            usernameval: '',
            passwordval: ''
        }
        //Bindings:
        this.fillUserData = this.fillUserData.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async fillUserData(_usernameval, _passwordval){
        console.log("fill User Data called: " + _usernameval + " & "+ _passwordval);
        if(_usernameval === null)
            _usernameval = this.state.usernameval;
        if(_passwordval === null)
            _passwordval = this.state.passwordval;
        console.log("before change: " + _usernameval + " & "+ _passwordval);
        //SetState is an asynchronous function, use await!
        await this.setState({
            usernameval: _usernameval,
            passwordval: _passwordval
        })
        console.log("Final state condition: " + this.state.usernameval + " & "+ this.state.passwordval);
    }

    async handleClick(){
        //this.fillUserData(document.getElementById('usernamefield').value, document.getElementById('passwordfield').value);
        let controller = new ControllerBuilder().withSetter(this.props.setterAction).withUserCredentials(this.state.usernameval, this.state.passwordval).withPurpose(this.props.purpose).build();
        await controller.requestLogic();
    }

    render(){
        return(
            <>
                <InputGroup id='usernamefield' className="mb-3" onChange={(e) => this.fillUserData(e.target.value, null)}>
                            <InputGroup.Prepend>
                            <InputGroup.Text id="username">Username :</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            />
                </InputGroup>
                <InputGroup id='passwordfield' className="mb-3" onChange={(e) => this.fillUserData(null, e.target.value)}>
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Password &nbsp;:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            placeholder="Password"
                            aria-label="Password    "
                            aria-describedby="basic-addon1"
                            type="password"
                            />
                </InputGroup>
                <Button variant="primary" onClick={() => this.handleClick()}> {this.props.purpose} </Button>
            </>
        )
    }
}

//expose this .js file so it can be imported by other modules:
export default UserDataModel