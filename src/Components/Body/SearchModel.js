//Basic Dependency:
import React from "react";
//Bootstrap Dependency:
import {
    Jumbotron,
  }  from 'react-bootstrap';
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
            <Jumbotron>
                <p> SEARCH ASSHOLE </p>
                <SearchBarModel setterAction={this.props.setterAction} purpose={'search'} token={this.props.token}/>
            </Jumbotron>
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