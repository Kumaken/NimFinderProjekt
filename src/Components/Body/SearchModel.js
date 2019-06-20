//Basic Dependency:
import React from "react";
//Component Dependency:
import SearchBarModel from './SearchBarModel.js';


//class Components:
class SearchModel extends React.Component{
    constructor (props) {
        super(props);
        //Bindings:
        this.searchPageLayout = this.searchPageLayout.bind(this);
    }




    searchPageLayout(){
        return(
            <>
            <div className="col-md-4 p-2 mb-1 bg-dark text-white">
                <h3 className="text-warning">&nbsp; Stalking TIME!</h3>
            </div>
            <SearchBarModel searchString={this.props.searchString} pageOffset={this.props.pageOffset} notifyOK={this.props.notifyOK} notifyFail={this.props.notifyFail}  setterAction={this.props.setterAction} purpose={'search'} token={this.props.token}/>
            </>
        )
    }

    render(){
        return( 
            <>
                {this.searchPageLayout()}
            </>
        )
    }
}


//expose this .js file so it can be imported by other modules:
export default SearchModel