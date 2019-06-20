//Basic Dependency:
import React from "react";
//Bootstrap Dependency:
import {
    Navbar,
    Form,
    FormControl,
    Button,
    InputGroup
  }  from 'react-bootstrap';
//Component Dependency:
import ControllerBuilder from "./../../Controllers/ControllerBuilder"; //require doesn't simply work with direct calls to inner class methods. better use import in this case.

//class Components:
class SearchBarModel extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            searchString: '',
            pageOffset: 0
        }
        //Bindings:
        this.searchBarLayout = this.searchBarLayout.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async updateState(_searchString){
        //console.log('INCOMING: '+_searchString)
        await this.setState({
            searchString: _searchString
        })
        //console.log('NOW: '+this.state.searchString);
    }

    async handleClick(reset){
        //console.log(">>>>>>>"+this.props.searchString)
        if(!reset){
            //this.props.setterAction(null,null,null,this.props.pageOffset + 1, null)
            await this.setState({
                searchString: this.props.searchString,
                pageOffset: this.props.pageOffset+1
            })
        }
        let controller = new ControllerBuilder().withSetter(this.props.setterAction).withPurpose(this.props.purpose).withSearchString(this.state.searchString).withToken(this.props.token).withNotifier(this.props.notifyOK,this.props.notifyFail).withPageOffset(this.state.pageOffset).withSearchString(this.state.searchString).build()
        //console.log(controller.searchString)
        await controller.requestLogic();
    }

    searchBarLayout(){
        return(
            <>
            <br></br>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Collapse id="basic-navbar-nav">
                    <InputGroup id='searchField' className="mb-2" onChange={(e) => this.updateState(e.target.value)}>
                        <Form inline>
                        <FormControl type="text" placeholder="Enter NIM or Name"className="mr-sm-6"/>
                        </Form>
                    </InputGroup>
                    <Button variant="outline-success" onClick={() => this.handleClick(true)}>Search!</Button>
                </Navbar.Collapse>
            </Navbar>
            <br></br>
            <div className="text-center">
                <Button  variant="secondary" onClick={() => this.handleClick(false)}>Next</Button>
            </div>
            <br></br>
            </> 
        )
    }

    render(){
        //console.log(this.state.searchString)
        return( 
            <>
                {this.searchBarLayout()}
            </>
        )
    }
}


//expose this .js file so it can be imported by other modules:
export default SearchBarModel