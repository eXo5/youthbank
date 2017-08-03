    
import React from 'react';
import {Button, Input} from 'react-materialize';
import '../../index.css'
import helper from "../../utils/thehelp/helper"
// import SignIn from './components/SignIn';
// import { Route, Link, Switch, Redirect } from 'react-router-dom';

class AddChore extends React.Component {
constructor(props){
	super(props)
	this.state = {
		choreName: "",
		choreDesc: "", 
		choreValue: "",
		chores:[]
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
    helper.postChore(this.state.choreName, this.state.choreDesc, this.state.choreValue)
  }

  w0rd = (event) => {
  	event.preventDefault()
  	helper.getChores()
  	.then(results => {
  		results.data[0].chores.map((element,i) =>{
  			console.log(element.choreName)
  		})
  })
  }  
  

  componentDidMount(){
  helper.getChores()
  		.then(results => {
		console.log(results)
  				var newChores = [];
  				for (let i = 0; i < results.data[0].chores.length; i++){
  					var id = results.data[0].chores[i]._id;
  					var choreName = results.data[0].chores[i].choreName.replace(/_/g, " ");
  					var choreDesc = results.data[0].chores[i].choreDesc;
  					var choreValue = results.data[0].chores[i].choreValue;
  					newChores.push({id: id, choreName: choreName, choreDesc: choreDesc, choreValue: choreValue});
  				}
  				this.setState({
  					chores: newChores
  				})

  		})
  	}

  	render(){
  			let showChores = this.state.chores.map((element, i) => {
  				return(<div key={i}><p id={element.id}>{element.choreName}</p><Button key={i}>Edit Chore</Button></div>)
  			})
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
<br />
	    {showChores}
    </div>

    )
	}
}

export default AddChore
