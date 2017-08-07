import React from 'react';
import {Row, Col,  Button, Input} from 'react-materialize';
import '../../index.css';
import helper from '../../utils/thehelp/helper.js';
import Navbar from './Navbar'
// import { Route, Link } from 'react-router-dom';
import Why from './WhyWeMadeIt';
import Features1 from './Features1';
import PgFooter from './PgFooter';
import { Redirect } from 'react-router-dom';
const newState = {};

class Home extends React.Component {

	constructor() {
    super()

    this.state = {
      //state for signup
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      redirectTo: null
    }
  }

    //sets state of data put in inp   ut fields
  handleChange = (event) => {
    
    newState[event.target.id] = event.target.value;
    this.setState(
      newState
    );

    console.log("This State: " + JSON.stringify(this.state));

  }//end of handleChange


	// saveUser = (event, email, password, firstName, lastName) => {
	// 	event.preventDefault();

	// 	helper.postParent(email, password, firstName, lastName)
		
	// };//end of saveUser function
	

	handleSubmit = (event) => {
	event.preventDefault()

	helper.postParent(this.state.email, this.state.password, this.state.firstName, this.state.lastName)

	this.setState({
				email: "",
				password: "",
				firstName: "",
				lastName: "",
				redirectTo: '/signin'
		
	})
}

render(){
	  if (this.state.redirectTo){
  		return <Redirect to={{pathname: this.state.redirectTo}} />
  	} else {

return(
	<div>
			<header>
	    		<Navbar />
			</header>

		<div className="landingPage1">
			<Row className="landingPhoto">
				  <Col s={4}>
				  <div className="landPtext">
					  <p> Teach kids the value of money. </p>
					  <p> Motivate them to work around the house.</p>
					  <p> Track their earnings and financial goals safely. </p>
				  </div>
				  </Col>

				  <Col s={2}>
				  </Col>
		          <Col s={6}>
			          <div className="signUpComponent">
				          <h4>Sign Up</h4>
									<form>
										<Input s={6} label="First Name" id="firstName" value={this.state.firstName} onChange={this.handleChange}/>
										<Input s={6} label="Last Name" id="lastName" value={this.state.lastName} onChange={this.handleChange}/>
										<Input type="email" label="Email"s={12} id="email" value={this.state.email} onChange={this.handleChange}/>
										<Input type="password" label="password" s={12} id="password" value={this.state.password} onChange={this.handleChange}/>
										{/*<Button type="submit" waves='light' className="mainBtn" onClick={(event) => this.props.saveUser(event, this.state.firstName, this.state.lastName, this.state.email, this.state.password)}>Submit</Button>*/}
										<Button type="submit" waves='light' className="mainBtn" onClick={this.handleSubmit}>Submit</Button>
									</form>
					   </div>
		          </Col>
		          
			</Row>
		</div>

		 <Why />
		 <Features1 />
		 <PgFooter />
		</div>
								
							
	)


  	}
}
}

export default Home;



