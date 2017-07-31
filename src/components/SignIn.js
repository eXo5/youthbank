import React, { Component } from 'react';
import {Navbar, NavItem, Row, Col, Footer, Input, Button, Tabs, Tab} from 'react-materialize';
import '../index.css';
import { Route, Link } from 'react-router-dom';
// import helper from './utils/thehelp/helper.js'
const newState = {};


class SignIn extends Component {

  constructor() {
    super()

    this.state = {
      //state for signIn
      email: "",
      password: ""

    }
  }

    //sets state of data put in input fields
  handleChange = (event) => {
    
    newState[event.target.id] = event.target.value;
    this.setState(
      newState
    );

    console.log("This State: " + JSON.stringify(this.state));

  }//end of handleChange


  // saveUser = (event, firstName, lastName, email, password) => {
  //   event.preventDefault();
    
  //   var newUser = {
  //     parentFirstName: firstName,
  //     parentLastName: lastName,
  //     email: email,
  //     password: password
  //   }
  //   // console.log(chosenArticle);

  //   helper.postParent(newUser)
  //   .then(results => {
  //     this.setState({
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //       password: ""
  //     })


  //   })
  // };//end of saveSearch function

  render() {
    return (
   <Row>
      <header>
        <Navbar brand='KidsBank' right>
      {/*we have to import react-router */}
          <NavItem href='get-started.html'>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
    </header>

      <Row></Row>
      <Row>
        <Col s={12}>
          <span className="signIn"><h4><strong>Please Sign In</strong></h4></span>
        </Col>  
      </Row>

      {/* SIGN IN DISPLAY FOR PARENT*/}
      <Row>
        <Col s={3}></Col>
          <Col s={6}>
            <Tabs className='signIn z-depth-1'>
              <Tab title="Parent" active>

                <form>
                  <Input type="email" label="Email"s={12} id="email" value={this.state.email} onChange={this.handleChange}/>
                  <Input type="password" label="Password" s={12} id="password" value={this.state.password} onChange={this.handleChange}/>
                  
                  <Row className="signIn">
                  
                    <Button s={12} type="submit" waves='light' className="mainBtn">Submit
                    </Button>
                  
                  
                  </Row>
                </form>

              </Tab>
              <Tab title="Child">

                <form>
                  <Input type="email" label="Email"s={12} id="email" value={this.state.email} onChange={this.handleChange}/>
                  <Input type="password" label="Password" s={12} id="password" value={this.state.password} onChange={this.handleChange}/>
                  <Row className="signIn">
                    <Button s={12} type="submit" waves='light' className="mainBtn">Submit
                    </Button>
                  </Row>
                </form>

              </Tab>
            </Tabs>
          </Col>
        <Col s={3}></Col>
      </Row>
        
      {/* FOOTER */}
        <Footer copyrights="&copy 2017 Copyright "
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        }
        links={
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
          </ul>
        }
        className='example page-footer'>
          <h5 className="white-text"> Kids Bank</h5>
          <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
      </Footer>
  </Row>

    );
  }
}

export default SignIn;
