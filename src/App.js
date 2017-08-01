import React, { Component } from 'react';

import {Row, Col, Form, Button, Carousel, Modal, Footer, Input, Card, CardTitle} from 'react-materialize';
import Navbar from './components/WelcomeView/Navbar'
import Home from './components/WelcomeView/SignUp';
import './index.css';
import logo from './logo.svg';
import PgFooter from './components/WelcomeView/PgFooter';
import Why from './components/WelcomeView/WhyWeMadeIt';
import Features1 from './components/WelcomeView/Features1';



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
			firstName: firstName,
			lastName: lastName,
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

    <div> 
	    	<header>
	    		<Navbar />
			</header>
			  <Home />
			 <Why />
			  <Features1 />
			{/*<PgFooter /> */}

	</div>


    );
  }
}

export default App;