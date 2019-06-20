//Basic Dependency:
import React from "react";
//Bootstrap Dependency:
import LoadingOverlay from 'react-loading-overlay';
//Component Dependency:

//class Components:
class LoadingModel extends React.Component{
    loadingPageLayout(){
        console.log("Loading animation rendered!");
        return(
            <LoadingOverlay
                active={true}
                spinner
                text='LOADING'
                >
                <p>Please wait...</p>
            </LoadingOverlay>

        )
    }

    render(){
        return( 
            <>
            {this.loadingPageLayout()}
            </>
        )
    }
}


//expose this .js file so it can be imported by other modules:
export default LoadingModel