import React from 'react'; //if import {Component} you don't have to extend React.Component, only Component 

//Import Style Dependencies:
import './Styles/App.css';

//miscellaneous dependencies:
import BrowserDetection from 'react-browser-detection';

//Import components:
import BaseHeaderModel from './Components/Header/BaseHeaderModel';
import BaseFooterModel from './Components/Footer/BaseFooterModel';
import BaseHomeModel from './Components/Body/BaseHomeModel';
import LoginModel from './Components/Body/LoginModel';
import RegisterModel from './Components/Body/RegisterModel';
import SearchResultModel from './Components/Body/SearchResultModel';
import SearchModel from './Components/Body/SearchModel.js';
import LoadingModel from './Components/Body/LoadingModel';
import RefreshController from './Controllers/RefreshController';
import About from './Components/Body/About';
//Browser Identificator
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
      currentUser: 'anonymous',
      notification: [undefined,undefined],
      pageOffset: 0,
      token: '',
      searchString: '',
      data: {
        status : undefined
      } //empty container for json
    }
    //Bind the 'this' context to setter method:
    this.setStateHandler = this.setStateHandler.bind(this);
    this.setLoadingState = this.setLoadingState.bind(this);
    this.sendOKNotification = this.sendOKNotification.bind(this);
    this.sendFailNotification = this.sendFailNotification.bind(this);
    this.notifyLogic = this.notifyLogic.bind(this);
    this.notified = true;
  }

  //State setter methods: (this method will be passed to children to be used there)
  async setStateHandler(targetPageTitle, newData, username, _pageOffset, _searchString){
    console.log("CALLED STATE CHANGER")
    if(newData === null || newData === undefined){
      //Means should be unchanged/untouched:
      newData=this.state.data;
    }
    if(targetPageTitle === null || targetPageTitle === undefined){
      //Means should be unchanged/untouched:
      targetPageTitle=this.state.pageTitle;
    }
    if(username === null || username === undefined){
      //Means should be unchanged/untouched:
      username=this.state.currentUser;
    }
    let newToken;
    console.log('AAAAAAAAA'+newData.token);
    console.log('BBBBBBBBB'+this.state.token);
    if(username === 'anonymous'){
      console.log('11111');
      newToken = '';
    }
    else if(newData.token === undefined || newData.token === null){
      console.log('22222');
      newToken = this.state.token;
    }
    else{
      console.log('33333');
      newToken = newData.token;
    }
    if(_pageOffset === null || _pageOffset === undefined){
      //Means should be unchanged/untouched:
      _pageOffset=this.state.pageOffset;
    }
    console.log('A1'+this.state.searchString);
    console.log('A2'+_searchString);
    if(_searchString === null || _searchString === undefined){
      _searchString=this.state.searchString;
    }
      
    await this.setState({
      token: newToken,
      loading: false, //loading should be over by then
      pageTitle: targetPageTitle,
      data: newData,
      currentUser: username,
      pageOffset: _pageOffset,
      searchString : _searchString
    });
  }

  //Change to Loading State:
  async setLoadingState(){
    console.log("Loading set to true!")
    await this.setState({
      loading: true
    })
  }

  //Send Notification of LOGIN or REGISTER
  async sendOKNotification(purpose){
    console.log("Called Notification State Changer! OK")
    await this.setState({
      notification : ['OK',purpose]
    })
    this.notified = false;
  }

  callNotification(){
    this.notified = true;
    console.log("Called NOTIFICATION!!!")
    return(
      this.state.notification[0] === 'OK' ?
      (<div className="alert alert-success" role="alert">
        <h4 className="alert-heading">Something Good Happened!</h4>
        <p>Aww yeah, {this.state.notification[1]} is successful!</p>
        <hr></hr>
        <p className="mb-0">On to the next operation, or whatever.</p>
      </div>)
    :
      (<div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Something Bad Happened!</h4>
        <p>Aww yeah, {this.state.notification[1]} is a failure!</p>
        <hr></hr>
        <p className="mb-0">PLEASE USE YOUR BRAIN!</p>
      </div>)
    )
  }

  //Send Notification of LOGIN or REGISTER
  async sendFailNotification(purpose){
    console.log("Called Notification State Changer! FAIL")
    await this.setState({
      notification : ['OK',purpose]
    })
    this.notified = false;
  }

  



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
    console.log(this.sendOKNotification);
    if(this.state.loading)
      return <LoadingModel />
    else if(this.state.pageTitle === 'about')
      return <About />
    else if(this.state.pageTitle === 'home')
      return <BaseHomeModel notifyOK={this.sendOKNotification} notifyFail={this.sendFailNotification}  setterAction={this.setStateHandler} browserName={<BrowserIdentification />} dateInfo={date} token={this.state.data['token']} />
    else if(this.state.pageTitle === 'login')
      return <LoginModel notifyOK={this.sendOKNotification} notifyFail={this.sendFailNotification}  className="text-center" setterAction={this.setStateHandler} />
    else if(this.state.pageTitle === 'register')
      return <RegisterModel notifyOK={this.sendOKNotification} notifyFail={this.sendFailNotification}  setterAction={this.setStateHandler} />
    else if(this.state.pageTitle === 'search')
      return <SearchModel searchString={this.state.searchString} pageOffset={this.state.pageOffset} notifyOK={this.sendOKNotification} notifyFail={this.sendFailNotification} setterAction={this.setStateHandler} token={this.state.token}/>
  }
  
  notifyLogic(){
    console.log(this.notified);
    if(this.notified === false){
      return (this.callNotification());
    }
  }

  //Main render method:
  render() {
    return (
      <div className="bcg">
        <RefreshController setterLoadingState ={this.setLoadingState}/>
        {this.notifyLogic() }
        <BaseHeaderModel currentUser={this.state.currentUser} setterAction={this.setStateHandler}/>
        {this.pageRenderLogic()}
        <SearchResultModel data={this.state.data}/>        
        <BaseFooterModel setterAction={this.setStateHandler}/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>

    )
  }
}


export default App;
