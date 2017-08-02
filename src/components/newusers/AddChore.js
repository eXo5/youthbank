    
import React from 'react';
import {Navbar, NavItem, Button, Modal, Row, Input} from 'react-materialize';
import '../../index.css'
import helper from "../../utils/thehelp/helper"
// import SignIn from './components/SignIn';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

class AddChore extends React.Component {
constructor(props){
	super(props)
	this.state = {
		choreName: "",
		choreDesc: "", 
		choreValue: ""
	}
}

  handleChange = (event) => {
  var newState = {};
	  newState[event.target.id] = event.target.value;
	  this.setState(
	    newState
	  );
	}

  w00ts = (event, choreName, choreDesc, choreValue) => {
    event.preventDefault()
    console.log()
    helper.postChore(this.state.choreName, this.state.choreDesc, this.state.choreValue)
  }

  w0rd = (event) => {
  	event.preventDefault()
  	helper.getChores()
  	.then(function(results){
  		console.log(results)
  	})
  }

  componentDidMount(){

  	}

  	render(){
  	 //  helper.getChores().then(function(results){
  		// console.log(results)
 			// })
		return(
			<div>
			<Button className="mainBtn" type="submit" onClick={this.w0rd}>Button</Button>
				<h1>Add A Chore!</h1>
	    <form>
		    <Input type="text" id="choreName" value={this.state.choreName} onChange={this.handleChange} />
		    <Input type="text" id="choreDesc" value={this.state.choreDesc} onChange={this.handleChange} />
		    <Input type="text" id="choreValue" value={this.state.choreValue} onChange={this.handleChange} />
		    <Button className="mainBtn" type="submit" onClick={this.w00ts}>Button</Button>
	    </form>

	    <p> </p>
    </div>

    )
	}
}

export default AddChore