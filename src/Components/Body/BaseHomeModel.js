//Basic Dependency:
import React from "react";
//Bootstrap Dependency:
import {
    Jumbotron,
  }  from 'react-bootstrap';
//Component Dependency:

//class Components:
class BaseHomeModel extends React.Component{

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