//Basic Dependency:
import React from "react";

//Class Components:
class BaseFooterModel extends React.Component{
    //main render method:
    render(){
        return(
            <div>
                <h3>NimFinderProjekt created by Abel Stanley @2019, All rights reserved.</h3>
            </div>
        ) 
    }
}

//expose this .js file so it can be imported by other modules:
export default BaseFooterModel