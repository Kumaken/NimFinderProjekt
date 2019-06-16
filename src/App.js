import React from 'react'; //if import {Component} you don't have to extend React.Component, only Component 
import logo from './logo.svg';
import './App.css';

//miscellaneous dependencies:
import BrowserDetection from 'react-browser-detection';

//Import components:
import BaseHeaderModel from './Components/BaseHeaderModel';
import BaseFooterModel from './Components/BaseFooterModel';
import BaseHomeModel from './Components/BaseHomeModel';

//Default App:
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

/*
//Render function
function RenderApp(){
  return (
    <div>
      <BaseHeaderModel />
      <BaseHomeModel />
      <BaseFooterModel />
    </div>
  )
}*/


const browserHandler = {
  chrome: () => "fellow chrome user...",
  googlebot: () => "GoogleBot!",
  default: (browser) =>`${browser}!`
};
 
class BrowserIdentification extends React.Component {
  render() {
    return (
      <BrowserDetection>
        { browserHandler }
      </BrowserDetection>
    );
  }
}



//Class based components of App:
class App extends React.Component {
  //State constructor: (State is mutable while Props are immutable)
  constructor(){
    super();
    this.state = {
      loading: false,
    }
    //Bind the 'this' context to setter method:
    this.setStateHandler = this.setStateHandler.bind(this);
  }

  //State setter methods: (this method will be passed to children to be used there)
  setStateHandler(){
    //event.preventDefault();
    this.setState({
      loading: false, //loading should be over by then
    })
  }

  //When this component is first mounted: (Only runs once)
  componentDidMount() {
    this.setState({loading: true})
    //fetch the data as response
    //get response then turn into json format
  }
  
  //Main render method:
  render() {
    const date = new Date();
    
    return (
      <div>
        <BaseHeaderModel />
        <BaseHomeModel setterAction={this.setStateHandler} browserName={<BrowserIdentification />} dateInfo={date}  />
        <BaseFooterModel />
      </div>
    )
  }
}


export default App;
