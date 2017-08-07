import React from 'react';
import {SideNav, SideNavItem, Button, Col, Footer, Form, Dropdown, NavItem, Modal, Row, Icon, Input} from 'react-materialize';
import '../../index.css';
import helper from '../../utils/thehelp/helper.js';
import { Redirect } from 'react-router-dom'

class ChoreModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chores:[],
      singleChore: {
        _id: "",
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

  handleModalChange = (event) => {
    var newSingleChoreState = {};
    newSingleChoreState[event.target.id] = event.target.value;
    this.setState({
      singleChore: newSingleChoreState
    })
  }//end of handleModalChange

    handleModalChange = (event) => {
    var newSingleChoreState = {};
    newSingleChoreState[event.target.id] = event.target.value;
    this.setState({
      singleChore: newSingleChoreState
    })
  }//end of handleModalChange

   handleModalBool = (event) => {
    var newSingleChoreState = {};
    console.log(event.target.value)
  }//end of handleModalBool

    editChore = (event, choreId) => {
      event.preventDefault();
      var choreId = event.target.id;
      console.log(choreId)
      //this.setState({theChoreToShow: choreId})
      var choreToChange = {_id: this.props.chores[choreId]._id, child: [], choreName:this.props.chores[choreId].choreName, choreDesc: this.state.chores[choreId].choreDesc, complete: this.props.chores[choreId].complete, childSaysComplete: this.props.chores[choreId].childSaysComplete, pastDue: this.props.chores[choreId].pastDue};
        this.setState({singleChore: choreToChange})
     
            if (this.props.chores[choreId].child){
      this.props.chores[choreId].child.map((element, i) => {
      this.setState(this.props.singleChore.child.push(element))
      })
    }
      console.log(choreToChange)
      setTimeout( this.setState({showOneChore: true}), 200)
  }
  componentDidMount(){
  //   helper.getChores()
  //     .then(results => {
  //   console.log(results)
  //         var newChores = [];
  //         for (let i = 0; i < results.data[0].chores.length; i++){
  //           var id = results.data[0].chores[i]._id;
  //           var choreName = results.data[0].chores[i].choreName.replace(/_/g, " ");
  //           var choreDesc = results.data[0].chores[i].choreDesc;
  //           var choreValue = results.data[0].chores[i].choreValue;
  //           var complete = results.data[0].chores[i].complete;
  //           var childSaysComplete = results.data[0].chores[i].childSaysComplete;
  //           var pastDue = results.data[0].chores[i].pastDue;
  //           newChores.push({_id: id, choreName: choreName, choreDesc: choreDesc, choreValue: choreValue, complete: complete, childSaysComplete: childSaysComplete, pastDue: pastDue});
  //         }
  //         this.setState({
  //           chores: newChores
  //         })
  // })
}
  componentDidUpdate(){

  }

  render() {
 //EDIT TASKS MODAL IS WRITTEN HERE
 if(this.props.loggedIn){
      if (this.props.showOneChore === false) {
        var showChores = this.props.chores.map((element, i) => {
          return(<div key={i}><p id={element._id}>{element.choreName}</p><p>{element.choreDesc}</p><p>{element.choreValue}</p><form><input type="hidden" name="id" value={element._id} /><Button id={i} onClick={this.editChore} key={i}>Edit Chore</Button></form><br/></div>)
        })//END SHOW CHORES
      }else if (this.props.showOneChore === true){ 
        var showChores = () => {
        return (
           <div>
           <form>
             <Input type="text" id="choreName" value={this.props.singleChore.choreName} onChange={this.handleModalChange}/>
             <Input type="text" id="choreDesc" value={this.props.singleChore.choreDesc} onChange={this.handleModalChange}/>
             <Input type="text" id="choreValue" value={this.props.singleChore.choreValue} onChange={this.handleModalChange}/>
             <Input type="checkbox" id="complete" checked={this.props.singleChore.complete} onChange={this.handleModalBool}/>
             <Button>Submit</Button>
           </form>
           </div>
          )
        }//end var showChores
      }//end else if
    //begin component return()  
    return(
{showChores}
      )//end component return
  }else if(this.props.loggedIn === null) {   
      return (<div>    
             <h1>...</h1>
        </div>)    
    
   }else{    
      return(    

      <Redirect to={{pathname: "/"}} />    
      )    
    }

  }
 } 

export default ChoreModal