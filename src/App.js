import React from 'react'; //if import {Component} you don't have to extend React.Component, only Component 

//Bootstrap Dependencies:
import {
  Table,
}  from 'react-bootstrap';

//miscellaneous dependencies:
import BrowserDetection from 'react-browser-detection';

//Import components:
import BaseHeaderModel from './Components/Header/BaseHeaderModel';
import BaseFooterModel from './Components/Footer/BaseFooterModel';
import BaseHomeModel from './Components/Body/BaseHomeModel';
import LoginModel from './Components/Body/LoginModel';
import RegisterModel from './Components/Body/RegisterModel';
import StudentInfoModel from './Components/Body/StudentInfoModel.js';
import SearchModel from './Components/Body/SearchModel.js';
import LoadingModel from './Components/Body/LoadingModel';
import RefreshController from './Controllers/RefreshController';

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
      data: {
        status : undefined
      } //empty container for json
    }
    //Bind the 'this' context to setter method:
    this.setStateHandler = this.setStateHandler.bind(this);
    this.setLoadingState = this.setLoadingState.bind(this);
  }

  //State setter methods: (this method will be passed to children to be used there)
  async setStateHandler(targetPageTitle, newData, username){
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
    await this.setState({
      loading: false, //loading should be over by then
      pageTitle: targetPageTitle,
      data: newData,
      currentUser: username
    });
  }

  //Change to Loading State:
  async setLoadingState(){
    console.log("Loading set to true!")
    await this.setState({
      loading: true
    })
  }

  s

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
    if(this.state.loading)
      return <LoadingModel height="2000"/>
    else if(this.state.pageTitle === 'home')
      return <BaseHomeModel setterAction={this.setStateHandler} browserName={<BrowserIdentification />} dateInfo={date} token={this.state.data['token']} />
    else if(this.state.pageTitle === 'login')
      return <LoginModel setterAction={this.setStateHandler} />
    else if(this.state.pageTitle === 'register')
      return <RegisterModel setterAction={this.setStateHandler} />
    else if(this.state.pageTitle === 'search')
      return <SearchModel setterAction={this.setStateHandler} token={this.state.data["token"]}/>
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

        return (
          <Table striped bordered hover variant="dark">
              <tr>
                  <th>Name</th>
                  <th>Prodi</th>
                  <th>NIM_TPB</th>
                  <th>NIM_Jurusan</th>
              </tr>
            {searchResult}
          </Table>
        )
    }
    return null;
}

  //Main render method:
  render() {
    return (
      <div height="2000">
        <RefreshController setterLoadingState ={this.setLoadingState}/>
        <BaseHeaderModel currentUser={this.state.currentUser} setterAction={this.setStateHandler}/>
        {this.pageRenderLogic()}
        <p className="text-center">Result:</p>
        <p className="text-center">Status : {this.state.data['status'] !== undefined ? this.state.data['status'] : 'NULL' }</p>
        <p className="text-center">Token : {this.state.data["token"] !== undefined ? this.state.data["token"] : 'No Token Yet' }</p>
        {this.renderStudentInfos(this.state.data["payload"])}
        <BaseFooterModel setterAction={this.setStateHandler}/>
      </div>
    )
  }
}


export default App;
