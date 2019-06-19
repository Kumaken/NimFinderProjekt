//Basic Dependency:
import React from "react";

class RefreshController extends React.Component{
    static setterLoadingState = undefined

    render(){
        RefreshController.setterLoadingState = this.props.setterLoadingState;
        return(
            <> </> //Dummy render, just to let App.js pass setLoadingState to this controller.
        )
    }
}

//expose this .js file so it can be imported by other modules:
export default RefreshController;