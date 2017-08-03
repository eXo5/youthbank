
import React from 'react';
// import helper from './utils/thehelp/helper.js';
// import {Row, Col, Form, Button, Carousel, Modal, Footer, Input, Card, CardTitle} from 'react-materialize';
// import Navbar from './components/WelcomeView/Navbar'
import Home from './components/WelcomeView/SignUp';
import './index.css';
// import PgFooter from './components/WelcomeView/PgFooter';
// import Why from './components/WelcomeView/WhyWeMadeIt';
// import Features1 from './components/WelcomeView/Features1';
import ViewParent from './components/ParentView/ViewParent';
import ViewChild from './components/ChildView/ViewChild';
import SignIn from './components/SignIn';
import { Route, Switch } from 'react-router-dom';
import AddChore from './components/newusers/AddChore';
import helper from "./utils/thehelp/helper";
import axios from 'axios';

// import axios from 'axios';
// const newState = {};


// const DisplayLinks = props => {
// 	if(props.loggedIn) {
// 		return(
// 			<h2>Logged In</h2>
// 			)
// 	}else{
// 		return(
// 			<h2>Not Logged In</h2>
// 			)
// 	}
// }




class App extends React.Component {

	constructor() {
    super()

    this.state = {
      //state
      loggedIn: null,
      user: null
      
    }
   // this._login = this._loginParent.bind(this)
   //this._logout = this._logout.bind(this)
  }

componentDidMount(){

  axios.get('/auth/user').then(response => {
      console.log(response.data.user);
     
      if (!!response.data.user) {
        console.log('THERE IS A USER')
        this.setState({
          loggedIn: true,
          user: response.data.user
        })
         console.log("This State: " + JSON.stringify(this.state));
      } else {
        this.setState({
          loggedIn: false,
          user: null
          
        })
      }
    });
}


  _loginParent = (event, email, password) => {
    event.preventDefault()
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

  // w00t = (event) => {
  //   event.preventDefault()
  //   helper.getChores().then(response => {console.log(response)})
  // }

  render() {
 
    return (

   	
			  
		<Switch>
			<Route exact path="/" render={() => <Home/> } />
			<Route exact path="/signin" render={() => <SignIn _login={this._loginParent}/>} />
      <Route exact path="/parent" render={() => 
        <ViewParent loggedIn={this.state.loggedIn} />}  />
      <Route exact path="/child" render={() => <ViewChild loggedIn={this.state.loggedIn} />}  />  
       <Route exact path="/addchore" render={() => <AddChore _logout={this._logout} />} />   
		</Switch>

			



    );
  }
}

export default App;
