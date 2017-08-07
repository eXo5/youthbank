    
import React from 'react';
import {Button, Input} from 'react-materialize';
import '../../index.css'
import helper from "../../utils/thehelp/helper"
import ReactModal from 'react-modal'
// import SignIn from './components/SignIn';
// import { Route, Link, Switch, Redirect } from 'react-router-dom';

class AddChore extends React.Component {
constructor(props){
	super(props)
	this.state = {
		showModal: false,
		choreName: "",
		choreDesc: "", 
		choreValue: "",
		chores:[],
		singleChore: {
			child: [],
			choreName: "",
			choreDesc: "",
			choreValue: "",
			complete: false,
			childSaysComplete: false,
			pastDue: false,
			createdAt: ""
		}
	}
}

  handleChange = (event) => {
  var newState = {};
	  newState[event.target.id] = event.target.value;
	  this.setState({
	  	newState
	  })
	}
	handleModalChange = (event) => {
		var newSingleChoreState = {};
		newSingleChoreState[event.target.id] = event.target.value;
		this.setState({
	    singleChore: newSingleChoreState
		})
	}

	handleModalBool = (event) => {
		var newSingleChoreState = {};
		console.log(event.target.checked)
	}
  w00ts = (event, choreName, choreDesc, choreValue) => {
    event.preventDefault()
    helper.postChore(this.state.choreName, this.state.choreDesc, this.state.choreValue)
  }

  w0rd = (event) => {
  	event.preventDefault()
  	helper.getChores()
  	.then(results => {
  		results[0].data[0].chores.map((element,i) =>{
  			console.log(element.choreName)
  		})
  })
  }

  editChore = (event, choreId) => {
  	var choreId = event.target.id;
  	event.preventDefault();
  	console.log(choreId)
  	helper.getOneChore(choreId)
  		.then(results => {
  			this.setState({showModal: true})
  			var newSingleChore = {_id: results.data._id, choreName: results.data.choreName, choreDesc: results.data.choreDesc, choreValue: results.data.choreValue, complete: results.data.complete, childSaysComplete:results.data.childSaysComplete, createdAt: results.data.createdAt, pastDue:results.data.pastDue}
  			this.setState({singleChore: newSingleChore})

  			console.log(results)
  		})
  }  
  
  handleCloseModal =()=> {
  	this.setState({showModal: false})
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
  					var complete = results.data[0].chores[i].complete;
  					var childSaysComplete = results.data[0].chores[i].childSaysComplete;
  					var pastDue = results.data[0].chores[i].pastDue;
  					newChores.push({_id: id, choreName: choreName, choreDesc: choreDesc, choreValue: choreValue, complete: complete, childSaysComplete: childSaysComplete, pastDue: pastDue});
  				}
  				this.setState({
  					chores: newChores
  				})

  		})
  	}

  	render(){
  			let showChores = this.state.chores.map((element, i) => {
  				return(<div key={i}><p id={element._id}>{element.choreName}</p><p>{element.choreDesc}</p><p>{element.choreValue}</p><form><input type="hidden" name="id" value={element._id} /><Button id={element._id} onClick={this.editChore} key={i}>Edit Chore</Button></form><br/></div>)
  			})
		return(
			<div>
				<div>
			<Button className="mainBtn" type="submit" onClick={this.w0rd}>Button</Button>
				<h1>Add A Chore!</h1>
	    <form>
		    <Input type="text" id="choreName" value={this.state.choreName} onChange={this.handleChange} />
		    <Input type="text" id="choreDesc" value={this.state.choreDesc} onChange={this.handleChange} />
		    <Input type="text" id="choreValue" value={this.state.choreValue} onChange={this.handleChange} />
		    <Button className="mainBtn" type="submit" onClick={this.w00ts}>Button</Button>
	    </form>
	    </div>
	    <div>
<br/>
	    {showChores}
   	 </div>
   	 <ReactModal
   	 isOpen={this.state.showModal}
   	 shouldCloseOnOverlayClick={true}
   	 onRequestClose={this.handleCloseModal}
   	 contentLabel="Edit Chore"
   	 >
   	 <div>
   	 <form>
   	 <input type="text" id="choreName" value={this.state.singleChore.choreName} onChange={this.handleModalChange}/>
   	 <input type="text" id="choreDesc" value={this.state.singleChore.choreDesc} onChange={this.handleModalChange}/>
   	 <input type="text" id="choreValue" value={this.state.singleChore.choreValue} onChange={this.handleModalChange}/>
   	 <input type="checkbox" id="complete" checked={this.state.singleChore.complete} onChange={this.handleModalBool}/>
   	 <Button>Submit</Button>
   	 </form>
   	 </div>
   	 </ReactModal>
   	</div> 

    )
	}
}

export default AddChore
