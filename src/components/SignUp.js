import React from 'react';
import {Row, Col,  Button, Slider, Slide, Modal, Footer, Input} from 'react-materialize';
import '../index.css';
import helper from '../utils/thehelp/helper'
// import helper from './utils/thehelp/helper.js';
// import { Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
const newState = {};

class Home extends React.Component {

	constructor() {
    super()

    this.state = {
      //state for signup
      firstName: "",
      lastName: "",
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

    console.log("This State: " + JSON.stringify(this.state));

  }//end of handleChange

handleSubmit = (event, firstName, lastName, email, password) => {
	event.preventDefault()
	console.log(firstName)
	console.log("^^^^^^fN")
	// alert('handle submit fired@!')
	helper.postParent(this.state.firstName, this.state.lastName, this.state.email, this.state.password)
	// debugger
	this.setState({
		redirectTo: '/signin'
	})
}


	// saveUser = (event, firstName, lastName, email, password) => {
	// 	event.preventDefault();
		
	// 	var newUser = {
	// 		parentFirstName: firstName,
	// 		parentLastName: lastName,
	// 		email: email,
	// 		password: password
	// 	}
	// 	// console.log(chosenArticle);

	// 	helper.postParent(newUser)
	// 	.then(results => {
	// 		this.setState({
	// 			firstName: "",
	// 			lastName: "",
	// 			email: "",
	// 			password: ""
	// 		})


	// 	})
	// };//end of saveSearch function

render(){
	  if (this.state.redirectTo){
  		return <Redirect to={{pathname: this.state.redirectTo}} />
  	} else {

return(


			<Row>
			<Col s={3}></Col>
          <Col s={6}>
          <div className="signUpComponent">
          <h4 className="title">Sign Up</h4>
					<form>
						<Input s={6} label="First Name" id="firstName" value={this.state.firstName} onChange={this.handleChange}/>
						<Input s={6} label="Last Name" id="lastName" value={this.state.lastName} onChange={this.handleChange}/>
						<Input type="email" label="Email"s={12} id="email" value={this.state.email} onChange={this.handleChange}/>
						<Input type="password" label="password" s={12} id="password" value={this.state.password} onChange={this.handleChange}/>
						<Button type="submit" waves='light' className="mainBtn" onClick={this.handleSubmit}>Submit</Button>
					</form>
					</div>
					<Col s={3}></Col>
          </Col>
				</Row>						
    	
	)


  	}
}
}

export default Home;
