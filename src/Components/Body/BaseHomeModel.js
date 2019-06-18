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
import StudentInfoModel from './StudentInfoModel.js';

//class Components:
class BaseHomeModel extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            data: {
                status : undefined
            } //empty container for json
        }
        //Bind the 'this' context to setter method:
        this.setStateHandler = this.setStateHandler.bind(this);
    }

    //State setter methods: (this method will be passed to children to be used there)
    setStateHandler(newData){
        //event.preventDefault();
        this.setState({
            data: newData, //loading should be over by then
        })
        
    }

    handleClickRegister(){
        RequestController.registerRequest(this.props.setterAction, this.setStateHandler);
        //RequestController.registerRequest(this.props.setterAction);
    }

    handleClickLogin(){
        RequestController.loginRequest(this.props.setterAction, this.setStateHandler);
    }

    handleClickByName(){
        RequestController.getRequest(this.props.setterAction, this.setStateHandler, this.state.data["token"] );
    }

    renderStudentInfos(data){
        if (this.state.data["payload"] !== undefined ){
            const searchResult = data.map(datum => <StudentInfoModel 
                key={datum.nim_tpb} 
                name={datum.name} 
                nim_tpb={datum.nim_tpb}
                nim_jur={datum.nim_jur}
                prodi = {datum.prodi} 
            />)

            return searchResult;
        }
        return null;
    }

    render(){
        //console.log(this.props.browserName);
        //console.log(this.props.dateInfo);
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
                        <Button variant="primary" onClick={this.handleClickRegister.bind(this)}>REGISTER</Button>
                    </p>
                    <p className="text-center">
                        <Button variant="primary" onClick={this.handleClickLogin.bind(this)}>LOGIN</Button>
                    </p>
                    <p className="text-center">
                        <Button variant="primary" onClick={this.handleClickByName.bind(this)}>BYNAME</Button>
                    </p>
                    <br></br>
                    <p className="text-center">Result:</p>
                    <p className="text-center">Status : {this.state.data["status"]}</p>
                    <p className="text-center">Token : {this.state.data["token"] !== undefined ? this.state.data["token"] : 'No Token Yet' }</p>
                    <div className="text-center">{
                        this.renderStudentInfos(this.state.data["payload"])
                    }</div>
                </Jumbotron>
            </>
        )
    }
}


//expose this .js file so it can be imported by other modules:
export default BaseHomeModel