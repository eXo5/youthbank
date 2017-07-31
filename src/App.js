import React, { Component } from 'react';

import {Navbar, NavItem, Row, Col,  Button, Slider, Slide, Modal, Footer, Input} from 'react-materialize';
import './index.css';

import helper from './utils/thehelp/helper.js'
const newState = {};


class App extends Component {

	constructor() {
    super()

    this.state = {
      //state for signup
      firstName: "",
      lastName: "",
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


	saveUser = (event, firstName, lastName, email, password) => {
		event.preventDefault();
		
		var newUser = {
			parentFirstName: firstName,
			parentLastName: lastName,
			email: email,
			password: password
		}
		// console.log(chosenArticle);

		helper.postParent(newUser)
		.then(results => {
			this.setState({
				firstName: "",
				lastName: "",
				email: "",
				password: ""
			})


		})
	};//end of saveSearch function


  render() {
    return (
   <Row>
    	<header>
    		<Navbar brand='KidsBank' right>
    	{/*we have to import react-router */}
					<NavItem href='get-started.html'>Getting started</NavItem>
					<NavItem href='components.html'>Components</NavItem>
					
							<Button waves='light'>Sign In</Button>

						}>
						<Row>
							<form>
								<Input type="email" label="Email"s={12} id="email" value={this.state.email} onChange={this.handleChange}/>
								<Input type="password" label="password" s={12} id="password" value={this.state.password} onChange={this.handleChange}/>
								<Button type="submit" waves='light' className="mainBtn">Submit</Button>
							</form>
						</Row>
					</Modal>
				</Navbar>


						
				</Navbar>
		</header>

			{/* SLIDESHOW FRONT PAGE */}
	      <main>
		      <Row>
		    		<Col s={12} className="grid6">
		    			<Slider className="titleWelcome">
							<Slide
								src="http://lorempixel.com/580/250/nature/1"
								title="Welcome to Kids Bank">
								Caption
								<Modal
									header='New Parent Sign-Up'
									trigger={
										<Button waves='light' className="signUpModal">Sign Up</Button>
									}>

									<Row>
											<form>
												<Input s={6} label="First Name" id="firstName" value={this.state.firstName} onChange={this.handleChange}/>
												<Input s={6} label="Last Name" id="lastName" value={this.state.lastName} onChange={this.handleChange}/>
												<Input type="email" label="Email"s={12} id="email" value={this.state.email} onChange={this.handleChange}/>
												<Input type="password" label="password" s={12} id="password" value={this.state.password} onChange={this.handleChange}/>
												<Button type="submit" waves='light' className="mainBtn" onClick={(event) => this.saveUser(event, this.state.firstName, this.state.lastName, this.state.email, this.state.password)}>Submit</Button>
											</form>
										</Row>
								

								</Modal>
							</Slide>
							<Slide
								src="http://lorempixel.com/580/250/nature/2"
								title="Slide Image 1"
								placement="left"
								className="slideComp">
								Component #1. 
							</Slide>
							<Slide
								src="http://lorempixel.com/580/250/nature/3"
								title="Slide Image 2"
								placement="right"
								className="slideComp">
								Component #2.
							</Slide>
						</Slider>
		    		</Col>
	    		</Row>
    		</main>

    	{/* FOOTER */}
	    	<Footer copyrights="&copy 2015 Copyright Text"
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
			</Footer>;
	</Row>


    );
  }
}

export default App;
