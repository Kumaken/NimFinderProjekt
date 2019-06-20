//Basic Dependency:
import React from "react";
//Bootstrap Dependency:
import {
    Jumbotron,
  }  from 'react-bootstrap';
//Style Dependency:
import './Styles/Home.css';
//Resources Dependency:
import vault_boy from './Resources/vaultboy_ok2.jpg';
import login from './Resources/login.jpg';
import register from './Resources/register.jpg';
import search from './Resources/search.jpg';
import aboutme from './Resources/aboutme.jpg';

//Component Dependency:

//class Components:
class BaseHomeModel extends React.Component{
    constructor(){
        super();
        this.cardLayout = this.cardLayout.bind(this);
    }

    cardLayout(title, desc, buttonText, purpose, image){
        return(
            <div className="col-sm-2">
                <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <button onClick={() => this.props.setterAction(purpose)} className="btn btn-primary">{buttonText}</button>
                </div>
                </div>
            </div>
        )
    }

    homePageLayout(){
        return(
            <>
                <br></br>
                <Jumbotron className="main">
                    <h1 className="text-center text-primary">Welcome to our NIM Finder, {this.props.browserName} </h1>
                    <p className="text-center text-secondary">
                    You are very lucky to visit today on  
                    <strong className="text-danger">{this.props.dateInfo.toString()}</strong>
                    </p>
                    <p className="text-center text-secondary"><strong className="text-danger">WHY?</strong> Because I said so.</p>
                    <p className="text-center text-secondary">it's simple, but does the job just fine, so don't complain pls.</p>
                    <div className='text-center'>
                        <img className="image" background={'transparent'} width={"10%"} src={vault_boy} alt='mascot vault_boy'/>
                    </div>
                </Jumbotron>
                <Jumbotron className="child">
                    <h3 className="text-center text-primary">Getting Started Guide here:</h3>
                </Jumbotron>
                <div className="row">
                    <div className="col-sm-2"></div>
                    {this.cardLayout("STEP 1: Login", "You have to login first before you can enjoy our Nim-finding-no jutsu!", "Go Login!", "login", login)}
                    {this.cardLayout("STEP 1.5: Don't have an account? Just register!", "It's quick and you don't need to do any e-mail confirmation bullshit.", "Register me plz!", 'register', register)}
                    {this.cardLayout("STEP 2 a.k.a. PROFIT: Go Searchie-Searchie", "Enjoy stalking everybody you creep...", "START BEING A CREEP", 'search', search)}
                    {this.cardLayout("STEP 9: About ME!", "DON'T CLICK. Unless you have insomnia and need a dose of pure boredom", "CURE MY INSOMNIA", 'about', aboutme)}
                </div>
            </>
        )
    }

    //Important! Have to wrap Javascript with html tags!
    render(){
        return(
            <> 
                {this.homePageLayout()}
            </>
        );
    }
}


//expose this .js file so it can be imported by other modules:
export default BaseHomeModel