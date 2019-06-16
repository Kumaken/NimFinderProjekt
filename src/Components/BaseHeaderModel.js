//Basic Dependency:
import React from "react";
import Styles from './../Styles/Style.css'; //import is needed for the styling to work

//Class Components:
class BaseHeaderModel extends React.Component{
    render(){
        return(
            <div className='navbar'>
                <h1>NimFinderProjekt</h1>
            </div>
        )
    }
}

//expose this .js file so it can be imported by other modules:
export default BaseHeaderModel