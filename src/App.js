import React, {Component} from 'react';
import helper from './utils/thehelp/helper.js';
import {Row, Col, Form, Button, Carousel, Modal, Footer, Input, Card, CardTitle} from 'react-materialize';
import Navbar from './components/WelcomeView/Navbar'
import Home from './components/WelcomeView/SignUp';
import './index.css';
import logo from './logo.svg';
import PgFooter from './components/WelcomeView/PgFooter';
import Why from './components/WelcomeView/WhyWeMadeIt';
import Features1 from './components/WelcomeView/Features1';
import SignIn from './components/SignIn';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import axios from 'axios';
const newState = {};


const DisplayLinks = props => {
	if(props.loggedIn) {
		return(
			<h2>Logged In</h2>
			)
	}else{
		return(
			<h2>Not Logged In</h2>
			)
	}
}

class App extends React.Component {

	constructor() {
    super()

    this.state = {
      //state
      loggedIn: false,
      user: null
    }
   // this._login = this._loginParent.bind(this)
   //this._logout = this._logout.bind(this)
  }

  componentDidMount(){
  	axios.get("/auth/user/").then(response => {
  		console.log(response.data)
  		if(!!response.data.user) {
  			console.log("USER PRESENT")
  			this.setState({
  				loggedIn: true,
  				user: response.data.user
  			})
  		}else{
  			this.setState({
  				loggedIn: false,
  				user: null
  			})
  		}
  	})
  }

  _loginParent = (email, password) => {
  	axios
  		.post("/auth/login/parent", {
  			email,
  			password
  		})
  		.then(response => {
  			console.log(response)
  			if(response.status === 200) {
  				this.setState({
  					loggedIn: true,
  					user: response.data.user
  				})
  			}
  		})
  }


  _logout = (event) => {
  	event.preventDefault()
  	console.log("Logged Out")
  	axios.post("/auth/logout")
  		.then(response => {
  			if (response.status === 200) {
  				this.setState({
  					loggedIn: false,
  					user: null
  				})
  			}
  		})
  }


  render() {
 
    return (
      <div>



    <div> 
	    	<header>
	    		<Navbar />
			</header>
			  
		<Switch>
			<Route exact path="/" render={() => <Home saveUser={this.saveUser}/>} />
			<Route exact path="/signin" render={() => <SignIn _login={this._loginParent}/>} />
		</Switch>
			 <Why />
			  <Features1 />
			{/*<PgFooter /> */}

	</div>
</div>
    );
  }
}

export default App;
