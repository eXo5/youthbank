import React from 'react';
import {SideNav, SideNavItem, Button, Col, Footer, Form, Dropdown, NavItem, Modal, Row, Icon, Input} from 'react-materialize';
import '../../index.css';
// import List from './List';
import ChildCards from './ChildCards';
import banner from '../../img/ParentView/banner-parent.png';
import navBg from '../../img/ParentView/nav-background.jpg';
import icon from '../../img/ParentView/vectorParent.png';
import helper from '../../utils/thehelp/helper.js';
import { Redirect } from 'react-router-dom'
import AddChore from '../newusers/AddChore.js'
const newState = {};

class ViewParent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      //state for new task
      choreName: "",
      choreDesc: "",
      choreValue: "",
      //state for tasks
      chores:[],
      showOneChore: false,
      theChoreToShow: 0,
      //state for find single task
      singleChore: {
        child: [],
        choreName: "",
        choreDesc: "",
        choreValue: "",
        complete: false,
        childSaysComplete: false,
        pastDue: false,
        createdAt: ""
    },
      //state for new kid
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      age: "",
      

      //redirect route
      redirectTo: null

    }
  }

  //sets state of data of input fields
  handleChange = (event) => {
    newState[event.target.id] = event.target.value;
    this.setState(
      newState
    );
    //console.log("This State: " + JSON.stringify(this.state));
  }//end of handleChange

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

  handleNewChild = (event, firstName, lastName, email, password) => {
  event.preventDefault()
  
  helper.postChild(this.state.email, this.state.password, this.state.firstName, this.state.lastName, this.state.age).then(response =>  {

      return alert("New Child Added!");
    }
      )

    this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        age: ""
    })

    }//end of handleNewChild

    handleNewChore = (event, choreName, choreDesc, choreValue) => { 
      event.preventDefault()
      helper.postChore(this.state.choreName, this.state.choreDesc, this.state.choreValue)
      this.setState({
        choreName: "",
        choreDesc: "",
        choreValue: ""
      })
        return alert("New Chore Added");
      }

    editChore = (event, choreId) => {
      event.preventDefault();
      var choreId = event.target.id;
      console.log(choreId)
      this.setState({theChoreToShow: choreId})
      var choreToChange = {_id: this.state.singleChore[this.state.theChoreToShow]._id, choreName:this.state.singleChore[this.state.theChoreToShow].choreName, choreDesc: this.state.singleChore[this.state.theChoreToShow].choreDesc, complete: this.state.singleChore[this.state.theChoreToShow].complete, childSaysComplete: this.state.singleChore[this.state.theChoreToShow].childSaysComplete, pastDue: this.state.singleChore[this.state.theChoreToShow].pastDue};
      this.setState({singleChore: choreToChange})
      function waitOneSec(){ 
        this.setState({showOneChore: true})
      }

     setTimeout(waitOneSec, 250)

               
      } 
      
//BEGIN LIFECYCLE EVENTS
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
    }//END COMPONENT DID MOUNT      
  render() {
    console.log("VIEW PARENT this.props.loggedin" + this.props.loggedIn)
    if( this.props.loggedIn ) {
      //EDIT TASKS MODAL IS WRITTEN HERE
      if (this.state.showOneChore === false) {var showChores = this.state.chores.map((element, i) => {
          return(<div key={i}><p id={element._id}>{element.choreName}</p><p>{element.choreDesc}</p><p>{element.choreValue}</p><form><input type="hidden" name="id" value={element._id} /><Button id={i} onClick={this.editChore} key={i}>Edit Chore</Button></form><br/></div>)
        })//END SHOW CHORES
}else if (this.state.showOneChore === true){ var showChores = () => {
  return (
     <div>
     <form>
       <input type="text" id="choreName" value={this.state.singleChore.choreName} onChange={this.handleModalChange}/>
       <input type="text" id="choreDesc" value={this.state.singleChore.choreDesc} onChange={this.handleModalChange}/>
       <input type="text" id="choreValue" value={this.state.singleChore.choreValue} onChange={this.handleModalChange}/>
       <Input type="checkbox" id="complete" checked={this.state.singleChore.complete} onChange={this.handleModalBool}/>
       <Button>Submit</Button>
     </form>
     </div>
    )
  }//end var showChores
}//end else if
    return(
      <div className="container">

        {/* START OF SIDE NAVBAR */}
        <SideNav
          trigger={<Button className="menuBtn">MENU</Button>}
          options={{ closeOnClick: false }}
        >
          <SideNavItem userView
            user={{
              background: navBg,
              image: icon,
              name: 'John Doe'
            }}
          />

        {/* MANAGE TASKS */}
          <Dropdown trigger={
            <SideNavItem href='#!icon' icon='list'>Manage Tasks</SideNavItem>
            }>

            {/* MODAL FOR NEW TASKS */}
            <Modal
              header='Add A New Task'
              fixedFooter
              trigger={
                <NavItem>Add A New Task</NavItem>
              }>
              <Row>
                <form>
                  <Input s={12} label="Task" id="choreName" value={this.state.choreName} onChange={this.handleChange}><Icon>build</Icon></Input>
                  <Input s={12} label="Description of Task" id="choreDesc" value={this.state.choreDesc} onChange={this.handleChange}><Icon></Icon></Input>
                  <Input s={12} label="Amount" id="choreValue" value={this.state.choreValue} onChange={this.handleChange}><Icon></Icon></Input>
                  
                  <Button onClick={this.handleNewChore} type="submit" waves='light' className="mainBtn">Submit</Button>
                </form>
              </Row>
            </Modal>
            
            <Modal
              header='Edit Task'
              fixedFooter
              trigger={
                <NavItem>Edit An Existing Task</NavItem>
                }>
                <Row>
                    {showChores}
                </Row>
              </Modal>
          </Dropdown>
          
           {/* MANAGE CHILDREN */}
          <Dropdown trigger={
              <SideNavItem href='#!second' icon='face'>Manage Children</SideNavItem>
            }>

          {/* MODAL FOR NEW CHILD */}
            <Modal
              header='Set Up a New Account for Child'
              fixedFooter
              trigger={
                <NavItem>Add A New Child</NavItem>
              }>
              <Row>
                <form>
                  <Input s={6} label="First Name" id="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                  <Input s={6} label="Last Name" id="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                  <Input s={12} label="Age" id="age" value={this.state.age} onChange={this.handleChange}/>
                  <Input type="email" label="Email"s={12} id="email" value={this.state.email} onChange={this.handleChange}/>
                  <Input type="password" label="password" s={12} id="password" value={this.state.password} onChange={this.handleChange}/>

                  <Button waves='light'  className="mainBtn" type="submit" onClick={this.handleNewChild}>Submit</Button>
                </form>
              </Row>
            </Modal>
            
            <NavItem>Edit An Exisiting Child</NavItem>
          </Dropdown>

           {/* MENU FOOTER */}
          <Footer className="page-footer">
              <Button waves='light' className="mainBtn">LogOut</Button>
          </Footer>

        </SideNav>
      {/* END OF SIDE NAVBAR */}

        {/* BANNER FOR PARENT VIEW */}
        <div className="row bannerDiv">
          <Col s={12}>
          <img src={banner} className="bannerParent" alt="banner" />
          </Col>
        </div>
 
        {/* CHILD DISPLAY */}
        <div className="row">
          <ChildCards />
        </div>

      <div className="row">
    <AddChore />
      </div>


      </div>
   )
   } else if (this.props.loggedIn === null) {   
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

export default ViewParent;

