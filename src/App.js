import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {Row, Col, Form, Button, Carousel, Modal, Footer, Input, Card, CardTitle} from 'react-materialize';
import Navbar from './components/WelcomeView/Navbar'
import Home from './components/WelcomeView/SignUp';
import './index.css';
import logo from './logo.svg';
import PgFooter from './components/WelcomeView/PgFooter';
import Why from './components/WelcomeView/WhyWeMadeIt';
import Features1 from './components/WelcomeView/Features1';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import axios from 'axios'
import helper from './utils/thehelp/helper'
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
      console.log("&^RESPONSE.DATA&^")
  		if(!!response.data.user) {
        console.log(response.data.user)
  			console.log("USER PRESENT")
  			this.setState({
  				loggedIn: true,
  				user: response.data.user
  			});
        console.log(this.state.user)
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

  w00ts0n = (event) => {
    event.preventDefault()
    axios.post("/api/post/newroute", function(req, res){
      console.log(req.user)
    }).then(response => {console.log(response)})
  }

  w00tDad = (event) => {
    event.preventDefault()
    helper.getChores().then(response => {console.log(response)})
  }
  render() {
  	// if (this.state.redirectTo){
  	// 	return <Redirect to={{pathname: this.state.redirectTo}} />
  	// }

    return (
      <div>
      <Button class="mainBtn" onClick={this.w00ts0n}>Button</Button>
      <Button class="mainBtn" onClick={this.w00tDad}>Button</Button>
		<Switch>
			<Route exact path="/" render={() => <SignUp saveUser={this.saveUser}/>} />
			<Route exact path="/signin" render={() => <SignIn _login={this._loginParent}/>} />
		</Switch>



    <div> 
	    	<header>
	    		<Navbar />
			</header>
			  <Home />
			 <Why />
			  <Features1 />
			{/*<PgFooter /> */}

	</div>
</div>
    );
  }
}

export default App;
