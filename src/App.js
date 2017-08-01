import React from 'react';
import {Navbar, NavItem, Row,  Button, Footer } from 'react-materialize';
import './index.css';
import helper from './utils/thehelp/helper.js';
import SignIn from './components/SignIn';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import SignUp from './components/SignUp';
import axios from 'axios'
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
  	// if (this.state.redirectTo){
  	// 	return <Redirect to={{pathname: this.state.redirectTo}} />
  	// }

    return (
    	<Row>
    	<header>
    		<Navbar brand='KidsBank' right>
    	{/*we have to import react-router */}
					<NavItem href='get-started.html'>Getting started</NavItem>
					<NavItem href='components.html'>Components</NavItem>
					<NavItem>
						<Link to="/signin">
						<Button waves="light">Sign In</Button>
						</Link>
					</NavItem>
				</Navbar>
		</header>
		<Row></Row>
		<main>

		<Switch>
			<Route exact path="/" render={() => <SignUp saveUser={this.saveUser}/>} />
			<Route exact path="/signin" render={() => <SignIn _login={this._loginParent}/>} />
		</Switch>

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
			</Footer>
	</Row>

    );
  }
}

export default App;	