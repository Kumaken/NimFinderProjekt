//Basic Dependency:
import React from "react";
import './Styles/Home.css';
//Component Dependency:
import UserDataModel from './UserDataModel.js';


//class Components:
class LoginModel extends React.Component{
    constructor (props) {
        super(props);

        //Bindings:
        this.loginPageLayout = this.loginPageLayout.bind(this);
    }



    loginPageLayout(){
        //console.log(this.props.notifyOK);
        return(
            <>
                <div className="col-md-4 p-2 mb-1 bg-dark text-white">
                    <h3 className="text-warning">&nbsp;Login Time! Enter your credentials here:</h3>
                </div>
                <br></br>
                <UserDataModel notifyOK={this.props.notifyOK} notifyFail={this.props.notifyFail}  className="text-center " setterAction={this.props.setterAction} purpose={'login'} />
            </>
        )
    }

    render(){
        return( 
            <>
                {this.loginPageLayout()}
            </>
        )
    }
}


//expose this .js file so it can be imported by other modules:
export default LoginModel