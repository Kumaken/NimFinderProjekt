import React from 'react'; //if import {Component} you don't have to extend React.Component, only Component 
//import logo from './logo.svg';
//Bootstrap Dependencies:
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

//miscellaneous dependencies:
import BrowserDetection from 'react-browser-detection';

//Import components:
import BaseHeaderModel from './Components/Header/BaseHeaderModel';
import BaseFooterModel from './Components/Footer/BaseFooterModel';
import BaseHomeModel from './Components/Body/BaseHomeModel';
import LoginModel from './Components/Body/LoginModel';
import StudentInfoModel from './Components/Body/StudentInfoModel.js';

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
      pageTitle: 'home',
      data: {
        status : undefined
      } //empty container for json
    }
    //Bind the 'this' context to setter method:
    this.setStateHandler = this.setStateHandler.bind(this);
  }

  //State setter methods: (this method will be passed to children to be used there)
  setStateHandler(targetPageTitle, newData){
    console.log("CALLED STATE CHANGER")
    if(newData === null){
      //Means should be unchanged/untouched:
      newData=this.state.data;
    }
    if(targetPageTitle === null){
      //Means should be unchanged/untouched:
      targetPageTitle=this.state.pageTitle;
    }
    this.setState({
      loading: false, //loading should be over by then
      pageTitle: targetPageTitle,
      data: newData
    });
  }

  /*
  setStateHandler = targetPageTitle => {
    console.log("CALLED STATE CHANGER")
    this.setState({
      loading: false, //loading should be over by then
      pageTitle: targetPageTitle
    });
  }*/

  /*
  //When this component is first mounted: (Only runs once)
  componentDidMount() {
    this.setState({loading: true})
    //fetch the data as response
    //get response then turn into json format
  }*/

  /*
  componentDidUpdate() {
    
  }*/

  pageRenderLogic(){
    const date = new Date();
    if(this.state.pageTitle === 'home')
      return <BaseHomeModel setterAction={this.setStateHandler} browserName={<BrowserIdentification />} dateInfo={date} token={this.state.data['token']} />
    else if(this.state.pageTitle === 'login')
      return <LoginModel setterAction={this.setStateHandler} />
  }
  
  renderStudentInfos(data){
    if (this.state.data["payload"] !== undefined ){
        const searchResult = data.map(datum => <StudentInfoModel 
            key={datum.nim_tpb} 
            name={datum.name} 
            nim_tpb={datum.nim_tpb}
            nim_jur={datum.nim_jur}
            prodi = {datum.prodi} 
        />)

        return searchResult;
    }
    return null;
}

  //Main render method:
  render() {
    
    return (
      <div>
        {this.state.pageTitle}
        <BaseHeaderModel setterAction={this.setStateHandler}/>
        {this.pageRenderLogic()}
        <p className="text-center">Result:</p>
        <p className="text-center">Status : {this.state.data['status'] !== undefined ? this.state.data['status'] : 'NULL' }</p>
        <p className="text-center">Token : {this.state.data["token"] !== undefined ? this.state.data["token"] : 'No Token Yet' }</p>
        <div className="text-center">{
            this.renderStudentInfos(this.state.data["payload"])
        }</div>
        <BaseFooterModel setterAction={this.setStateHandler}/>
      </div>
    )
  }
}


export default App;
