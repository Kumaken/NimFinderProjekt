//Basic Dependency:
import React from "react";
//request dependency:
import RequestController from '../../Controllers/RequestController';
//Bootstrap Dependency:
import {
    Jumbotron,
    Button
  }  from 'react-bootstrap';
//Component Dependency:
import ClickHandlers from '../../Controllers/ClickHandlers.js';

//class Components:
class BaseHomeModel extends React.Component{
    constructor (props) {
        super(props);
    }

    homePageLayout(){
        return(
            <>
                <Jumbotron>
                    <h1 className="text-center">Welcome to our NIM Finder, {this.props.browserName} </h1>
                    <p className="text-center">
                    You are very lucky to visit today on {this.props.dateInfo.toString()}
                    </p>
                    <p className="text-center">it's simple, but does the job just fine, so don't complain pls.</p>
                    <br></br>
                </Jumbotron>
                <Jumbotron>
                    <p className="text-center">Enter necessary search parameters:</p>
                    <p className="text-center">
                        <Button variant="primary" onClick={() => ClickHandlers.handleClickRegister(this.props.setterAction)}>REGISTER</Button>
                    </p>
                    <p className="text-center">
                        <Button variant="primary" onClick={() =>ClickHandlers.handleClickLogin(this.props.setterAction)}>LOGIN</Button>
                    </p>
                    <p className="text-center">
                        <Button variant="primary" onClick={() =>ClickHandlers.handleClickByName(this.props.setterAction, this.props.token)}>BYNAME</Button>
                    </p>
                    <br></br>
                    
                </Jumbotron>
            </>
        )
    }

    //Important! Have to wrap Javascript with html tags!
    render(){
        return(
            <> 
                {this.homePageLayout()}
            </>
        );
    }
}


//expose this .js file so it can be imported by other modules:
export default BaseHomeModel