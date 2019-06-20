//Basic Dependency:
import React from "react";
//Bootstrap Dependency:
import {
    Jumbotron,
  }  from 'react-bootstrap';

import vault_boy from './Resources/vaultboy_ok2.jpg';

class About extends React.Component{
    //main render method:
    render(){
        return(
        <Jumbotron className="main">
            <h1 className="text-center text-primary">HELLO THERE, {this.props.browserName} </h1>
            <p className="text-center text-secondary">
            I AM
            <strong className="text-danger">Abel Stanley</strong>
            </p>
            <p className="text-center text-secondary"><strong className="text-danger">WHAT YOU NEED TO KNOW ABOUT ME:</strong> CHITATO > LAYS. FIGHT ME</p>
            <p className="text-center text-secondary">Nice to meet you buddy</p>
            <div className='text-center'>
                <img className="image" background={'transparent'} width={"10%"} src={vault_boy} alt='mascot vault_boy'/>
            </div>
        </Jumbotron>       
        ) 
    }
}

//expose this .js file so it can be imported by other modules:
export default About;