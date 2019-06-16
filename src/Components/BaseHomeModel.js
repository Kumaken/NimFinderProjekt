//Basic Dependency:
import React from "react";
//request dependency:
import RequestController from './../Controllers/RequestController';

//Class Components:
class BaseHomeModel extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            data: {
                status : "Empty"
            } //empty container for json
        }
        //Bind the 'this' context to setter method:
        this.setStateHandler = this.setStateHandler.bind(this);
    }

    //State setter methods: (this method will be passed to children to be used there)
    setStateHandler(newData){
        //event.preventDefault();
        console.log(newData);
        this.setState({
            data: newData, //loading should be over by then
        })
        
    }

    handleClick(){
        RequestController.registerRequest(this.props.setterAction, this.setStateHandler);
        //RequestController.registerRequest(this.props.setterAction);
    }

    render(){
        //console.log(this.props.browserName);
        //console.log(this.props.dateInfo);
        return(
            <div>
                <h1>Welcome to our NIM Finder, {this.props.browserName} </h1>
                <h2>You are very lucky to visit today on {this.props.dateInfo.toString()}</h2>
                <h3>it's simple, but does the job just fine, so don't complain pls.</h3>
                <p>Enter necessary search parameters:</p>
                <button onClick={this.handleClick.bind(this)}> CLICK ME </button>
                <p>{this.state.data["status"]}</p>
            </div>
        )
    }
}


//expose this .js file so it can be imported by other modules:
export default BaseHomeModel