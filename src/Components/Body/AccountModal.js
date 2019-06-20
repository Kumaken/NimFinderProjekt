//Basic Dependency:
import React from "react";
//Bootstrap Dependency:
import {
  Button,
  Modal,
  Overlay,
  Popover,
  ButtonToolbar
}  from 'react-bootstrap';

class AccountModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
      this.handleClick = ({ target }) => {
        this.setState(s => ({ target, show: !s.show , showLogoutPopup: false}));
      };

      this.state = {
        show: false,
        showLogoutPopup:false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }

    handleLogout(){
      
      this.setState({ show: false, showLogoutPopup: true});
      this.render();
      //console.log('Set state, ready to re-erender')
      this.props.setterAction(null,{},'anonymous');
      //console.log('set to anonymous')
    }
  
    popupLogic(){
      //console.log('Logic called: '+this.currentUser+ ' '+this.props.currentUser)
      return(<><strong>Bad news!</strong> You have been logged out.</>);
    }

    //use ternary rather than if-else in JSX!
    render() {
      //console.log("RENDERING!")
      return (
        <>
        <ButtonToolbar>
          <Button variant="primary" onClick={this.handleClick}>
            Hello there, {this.props.currentUser} </Button>
              <Overlay
                show={this.state.showLogoutPopup}
                target={this.state.target}
                placement="bottom"
                container={this}
                containerPadding={20}
              >
                <Popover id="popover-contained" title="Warning!">
                    {this.popupLogic()}
                </Popover>
              </Overlay>

          
        </ButtonToolbar>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Account - {this.props.currentUser}</Modal.Title>
            </Modal.Header>
            <Modal.Body>You are currently logged in as {this.props.currentUser}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={() => {this.handleLogout()}}>
                LOGOUT
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
export default AccountModal;