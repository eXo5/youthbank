import React from 'react';
import {SideNav, SideNavItem, Button, Col, Footer, Dropdown, Navbar, NavItem, Modal, Row, Icon, Input, Card, CardTitle} from 'react-materialize';
import '../../index.css';
// import List from './List';
import ChildCards from './ChildCards';
import banner from '../../img/ParentView/banner-parent.png';
import navBg from '../../img/ParentView/nav-background.jpg';
import icon from '../../img/ParentView/vectorParent.png';
import background from '../../img/ParentView/background1.jpg';
import helper from '../../utils/thehelp/helper.js';
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import UnclaimedTasks from './UnclaimedTasks';
import AmountOwed from './AmountOwed';
import CompletedTas from './CompletedTas';
import PendingApp from './PendingApp';
import PgFooter from './PgFooter';

const newState = {};

class ViewParent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      //state for new task
      choreName: "",
      choreDesc: "",
      choreValue: "",
      choreComplete:"",
      choreChildSaysComplete: "",
      chorePastDue: "",
      //state for tasks
      chores:[],
      children: [],
      showOneChore: false,
      theChoreToShow: 0,
      showModal: false,
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
      fixChore: {
        child: [],
        choreName: "",
        choreDesc: "",
        choreValue: "",
        complete: false,
        childSaysComplete: false,
        pastDue: false,
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

  fillChoresAndChildren = () => { 
    helper.getChores()
      .then(results => {
          console.log(results)
          //fill chores
          var newChores = [];
          for (let i = 0; i < results.data[0].chores.length; i++){
            var id = results.data[0].chores[i]._id;
            var choreName = results.data[0].chores[i].choreName.replace(/_/g, " ");
            var choreDesc = results.data[0].chores[i].choreDesc;
            var choreValue = results.data[0].chores[i].choreValue;
            var complete = results.data[0].chores[i].complete;
            var childSaysComplete = results.data[0].chores[i].childSaysComplete;
            var pastDue = results.data[0].chores[i].pastDue;
            newChores.push({
              _id: id, 
              choreName: choreName, 
              choreDesc: choreDesc, 
              choreValue: choreValue, 
              complete: complete, 
              childSaysComplete: childSaysComplete, 
              pastDue: pastDue});
          }
          //fill children
          var newKids = [];
          for (let i=0; i < results.data[0].children.length; i++){
            var id = results.data[0].children[i]._id;
            var firstName = results.data[0].children[i].firstName;
            var lastName = results.data[0].children[i].lastName;
            var email = results.data[0].children[i].email;
            var age = results.data[0].children[i].age;
            var goals = results.data[0].children[i].goals;
            //goals is an array;
            console.log(id, firstName, lastName, email, age);
            newKids.push({
              id: id, 
              firstName: firstName, 
              lastName: lastName,
              email: email, 
              age: age, 
              goals: goals
            })
          }//end kids loop
          this.setState({
            chores: newChores,
            children: newKids
          })
      })
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
      //nonsense!
    })
  }//end of handleModalChange

   handleModalBool = (event) => {
    var newSingleChoreState = {};
    console.log(event.target.value)
  }//end of handleModalBool

  handleNewChild = (event, firstName, lastName, email, password) => {

  event.preventDefault();
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
      var choreToChange = {_id: this.state.chores[choreId]._id, choreName:this.state.chores[choreId].choreName, choreDesc: this.state.chores[choreId].choreDesc, complete: this.state.chores[choreId].complete, childSaysComplete: this.state.chores[choreId].childSaysComplete, pastDue: this.state.chores[choreId].pastDue};
      
      this.setState({singleChore: choreToChange})
      console.log(this.state.singleChore)
            
      }

    postEditedChore = (event, choreId, choreName, choreDesc, choreValue, choreComplete, choreChildSaysComplete, chorePastDue) => {
        event.preventDefault();
        var choreId = event.target.id;
        console.log(choreId)
        console.log(this.state.choreName)
        console.log(this.state.choreDesc)
        console.log(this.state.choreValue)
        helper.postEditedChore(choreId, this.state.choreName, this.state.choreDesc, this.state.choreValue, this.state.choreComplete, this.state.choreChildSaysComplete, this.state.chorePastDue )
          .then(results =>{
            helper.getChores()
            .then(function(){
              alert("Chore has been updated");
               (this).find(".close_link").click("closeOnClick");
            })
          })
      }

  postEditedChild = (event, childId, firstName, lastName, email, age) => {
    event.preventDefault();
    var childId = event.target.id;
    helper.editChild(childId, this.state.firstName, this.state.lastName, this.state.email, this.state.age)
      .then(results=>{
        alert("Child has been updated")
      })

  }    
      
//BEGIN LIFECYCLE EVENTS
  componentDidMount(){ 
    this.fillChoresAndChildren()
    }//END COMPONENT DID MOUNT      
  render() {
    console.log("VIEW PARENT this.props.loggedin" + this.props.loggedIn)
    if( this.props.loggedIn ) {
      //EDIT TASKS MODAL IS WRITTEN HERE
        var showChores = this.state.chores.map((element, i) => {
          return(<div key={i}>
                  <p id={element._id}>{element.choreName}</p>
                  <p>{element.choreDesc}</p>
                  <p>{element.choreValue}</p>
                  
                  <Modal header="Edit Task"
        fixedFooter
        trigger={<Button id={i} className="mainBtn" key={i}>Edit Chore</Button>}
      >{/*Modal for editing specific chore*/}

        <Row>
          <form>
           <h5>{element.choreName}</h5> 
            <Input type="text" id="choreName" value={this.state.choreName} onChange={this.handleChange} />
            <h5>{element.choreDesc}</h5>
            <Input type="text" id="choreDesc" value={this.state.schoreDesc} onChange={this.handleChange} />
            <h5>{element.choreValue}</h5>
            <Input type="text" id="choreValue" value={this.state.choreValue} onChange={this.handleChange} />
             <h5>{element.complete.toString()}</h5>
            <Input type="text" id="choreComplete" value={this.state.choreComplete} onChange={this.handleChange} />
             <h5>{element.childSaysComplete.toString()}</h5>
            <Input type="text" id="choreChildSaysComplete" value={this.state.choreChildSaysComplete} onChange={this.handleChange} />
             <h5>{element.pastDue.toString()}</h5>
              <Input type="text" id="chorePastDue" value={this.state.chorePastDue} onChange={this.handleChange} />
            <Button id={element._id} onClick={this.postEditedChore}>Submit Changes</Button>
          </form>
        </Row>    
        </Modal>
                  <br/>
                  
                  </div>
            )
        })//END SHOW CHORES

        var showKids = this.state.children.map((element, i)=>{
          return(
              <div key={i}>
                <p className="kidStats" id={element.id}>{element.firstName}</p>
                <p className="kidStats" >{element.lastName}</p>
                <p className="kidStats" >{element.email}</p>
                <p className="kidStats" >{element.age}</p>
              {/*Insert Goals array?*/}
              <Modal 
              header="Edit Children"
              //if only it were that easy
              fixedFooter
              trigger={<Button id={i} className="mainBtn" key={i}>Edit Child</Button>}
              >
              <Row>
                <form>
                  <h5>{element.firstName}</h5>
                  <Input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                  <h5>{element.lastName}</h5>
                  <Input type="text" id="lastName" value={this.state.lastName} onChange={this.handleChange} />
                  <h5>{element.email}</h5>
                  <Input type="text" id="email" value={this.state.email} onChange={this.handleChange} />
                   <h5>{element.age}</h5>
                  <Input type="text" id="age" value={this.state.age} onChange={this.handleChange} />

                  <Button id={element.id} type="submit" className="mainBtn" onClick={this.postEditedChild}>Confirm Child</Button>
                </form>
               </Row>
              </Modal>  
              </div>
            )
        })



    return(
      <div>

        {/* START OF SIDE NAVBAR */}
      <header>
          <div className="">
              <Navbar brand='Young Money' className="NavbarCSS">
            {/*we have to import react-router */}

                <li className="navItems">
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
                                  <Input s={12} label="Task" id="task" value={this.state.task} onChange={this.handleChange}><Icon>build</Icon></Input>
                                  <Input s={12} label="Description of Task" id="descript" value={this.state.descript} onChange={this.handleChange}><Icon></Icon></Input>
                                  <Input s={12} label="Amount" id="amount" value={this.state.amount} onChange={this.handleChange}><Icon></Icon></Input>
                                  
                                  <Button type="submit" waves='light' className="mainBtn">Submit</Button>
                                </form>
                              </Row>
                            </Modal>
                             <Modal
                                id="editModal"
                                header='Edit Task'
                                fixedFooter
                                trigger={
                            <NavItem>Edit An Existing Task</NavItem>
                             }>
                                {showChores}
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
                                <Modal
                                    id="editModal"
                                    header='Edit Task'
                                    fixedFooter
                                    trigger={
                            <NavItem>Edit An Exisiting Child</NavItem>
                                      }>
                                  {showKids}
                                  </Modal>
                          </Dropdown>

                           {/* MENU FOOTER */}
                          <Footer className="page-footer">
                              <Button waves='light' className="mainBtn">LogOut</Button>
                          </Footer>

                        </SideNav>
                      {/* END OF SIDE NAVBAR */}

                  </li>

          </Navbar>

        </div>  

      </header>

      {/* BEGIN PAGE CONTENT */}

    <Row> 
      <Col s={3} className='grid-example'>
        <UnclaimedTasks />
        <CompletedTas />
        <PendingApp />
      </Col>
      <Col s={9} className='grid-example'>
        <Card className='small'
              header={<CardTitle reveal image={background} waves="light"> Good Evening Alex </CardTitle>}
              actions={[<a href='#'></a>]}>
              Keep working on your goal for Concert Tickets!
        </Card>

        {/* CHILD DISPLAY */}
        <div>
          <Row>
            <Col s={8}>
                <ChildCards />
            </Col>
            <Col s={4}>
                <AmountOwed />
            </Col>
           </Row>
        </div>
      </Col>
    </Row>

        <PgFooter />
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
