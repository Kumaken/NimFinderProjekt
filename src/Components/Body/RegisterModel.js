//Basic Dependency:
import React from "react";
//Component Dependency:
import UserDataModel from './UserDataModel.js';


//class Components:
class RegisterModel extends React.Component{
    constructor (props) {
        super(props);

        //Bindings:
        this.registerPageLayout = this.registerPageLayout.bind(this);
    }



    registerPageLayout(){
        return(
            <>
                <div className="col-md-4 p-2 mb-1 bg-dark text-white">
                    <h3 className="text-warning">&nbsp;Register Time! Enter your credentials here:</h3>
                </div>
                <br></br>
                <UserDataModel notifyOK={this.props.notifyOK} notifyFail={this.props.notifyFail}  setterAction={this.props.setterAction} purpose={'register'} />
            </>
        )
    }

    render(){
        return( 
            <>
                {this.registerPageLayout()}
            </>
        )
    }
}


//expose this .js file so it can be imported by other modules:
export default RegisterModel