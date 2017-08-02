import React, { Component } from 'react';
import {Row, Col, Input, Button, Tabs, Tab} from 'react-materialize';
import '../index.css';
import { Redirect } from 'react-router-dom';
import helper from '../utils/thehelp/helper.js'
const newState = {};


class SignIn extends Component {

  constructor() {
    super()

    this.state = {
      //state for signIn
      email: "",
      password: "",
      redirectTo: null

    }

  }

    //sets state of data put in input fields
  handleChange = (event) => {
    
    newState[event.target.id] = event.target.value;
    this.setState(
      newState
    );

    console.log("This State in SIGNIN: " + JSON.stringify(this.state));

  }//end of handleChange

  handleSubmit = (event, email, password) => {
    event.preventDefault()
    console.log("Email: " + this.state.email + "  PASSWORD: " + this.state.password)
    helper.logOneIn(this.state.email, this.state.password)
    this.setState({redirectTo: "/"})
  }
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
    if (this.state.redirectTo) {
      return(<Redirect to={this.state.redirectTo} />)
    }
    return (

   <Row>
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
                  
                    <Button onClick={this.handleSubmit} s={12} type="submit" waves='light' className="mainBtn">Submit
                    </Button>
                  
                  
                  </Row>
                </form>

              </Tab>
              <Tab title="Child">

                <form>
                  <Input type="email" label="Email"s={12} id="email" value={this.state.email} onChange={this.handleChange}/>
                  <Input type="password" label="Password" s={12} id="password" value={this.state.password} onChange={this.handleChange}/>
                  <Row className="signIn">
                    <Button onClick={this.handleClick} s={12} type="submit" waves='light' className="mainBtn">Submit
                    </Button>
                  </Row>
                </form>

              </Tab>
            </Tabs>
          </Col>
        <Col s={3}></Col>
      </Row>
        
    
  </Row>

    );
  }
}

export default SignIn;