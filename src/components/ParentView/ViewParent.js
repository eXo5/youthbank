import React from 'react';
import {SideNav, SideNavItem, Button, Col, Footer, Dropdown, NavItem, Modal, Row, Icon, Input, Card, CardTitle} from 'react-materialize';
import '../../index.css';
// import List from './List';
import ChildCards from './ChildCards';
import banner from '../../img/ParentView/banner-parent.png';
import navBg from '../../img/ParentView/nav-background.jpg';
import icon from '../../img/ParentView/vectorParent.png';
// import background from '../../img/ParentView/family.jpg';
import helper from '../../utils/thehelp/helper.js';

import UnclaimedTasks from './UnclaimedTasks';
import AmountOwed from './AmountOwed';
import PgFooter from './PgFooter';

import { Redirect } from 'react-router-dom';

const newState = {};

class ViewParent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      //state for new task
      choreName: "",
      choreDesc: "",
      choreValue: "",

      //state for new kid
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      age: "",
      

      //redirect route
      redirectTo: null,

      //set children
      children: []
    }
  }

 componentDidMount(){

    helper.getChildren()
    .then(function(response){


      var results = [];
      // console.log("CHILDREN: " + response.data.children[0].firstName)

      //loops through array of objects from query from database and pushes it to newResults array with key/value pairs
      for (let i = 0; i < response.data.children.length; i++){
        var id = response.data.children[i]._id;
        var firstName = response.data.children[i].firstName;
        var age = response.data.children[i].age;
    
        results.push({
          id: id, 
          firstName: firstName, 
          age: age
        });
        
    }
    // console.log("id: " + id);
    // console.log(this)
    // debugger

    //sets state of saved articles with 'newResults' array
    console.log("RESULTS" + results)
    this.setState({ children: results});

    
    }.bind(this))//end of getchildren
  }

  //sets state of data put in input fields
  handleChange = (event) => {
    
    newState[event.target.id] = event.target.value;
    this.setState(
      newState
    );

    //console.log("This State: " + JSON.stringify(this.state));

  }//end of handleChange

  handleNewChild = (event, firstName, lastName, email, password) => {
  event.preventDefault()
  
  helper.postChild(this.state.email, this.state.password, this.state.firstName, this.state.lastName, this.state.age).then(response =>  {

     

      var newChild = {
          email: this.state.email,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          age: this.state.age
      };

      var newChildren = this.state.children;

      newChildren.push(newChild);

      console.log("New Children: ");
      console.log(newChildren);

      this.setState({ 
        children: newChildren,
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        age: ""
      });

      alert("New Child Added!");
    });
      

    // this.setState({
    //     email: "",
    //     password: "",
    //     firstName: "",
    //     lastName: "",
    //     age: ""
    // })
    

    }//end of handleNewChild

    handleNewChore = (event, choreName, choreDesc, choreValue) => { 
      event.preventDefault()
      helper.postChore(this.state.choreName, this.state.choreDesc, this.state.choreValue).then(response =>{
        return alert("New Chore Added")
      })
    }


  render() {
    console.log("VIEW PARENT this.props.loggedin: " + this.props.loggedIn);
    // debugger
    if (this.props.loggedIn) {
    return(
      <div>

        {/* START OF SIDE NAVBAR */}
        <SideNav
          trigger={<Button className="menuBtn right">MENU</Button>}
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
            
            <NavItem>Edit An Existing Task</NavItem>
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
            
            <NavItem onClick={this.getKidInfo}>Edit An Exisiting Child</NavItem>
          </Dropdown>

           {/* MENU FOOTER */}
          <Footer className="page-footer">
              <Button waves='light' className="mainBtn" onClick={this.props.logEmOut}>LogOut</Button>
          </Footer>

        </SideNav>
      {/* END OF SIDE NAVBAR */}


      {/* BEGIN PAGE CONTENT */}

    <Row> 
      <Col s={3} className='grid-example'>
        <UnclaimedTasks />
      </Col>
      <Col s={9} className='grid-example'>
        <Card className='small'
              header={<CardTitle reveal image={banner} waves="light"> Good Morning, Jessica! </CardTitle>}
              actions={[<a href='#'></a>]}>
              
        </Card>

        {/* CHILD DISPLAY */}
        <div>
          <Row>
            <Col s={8}>
                <ChildCards childList={this.state.children}/>
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
          
        </div>)
    }
    else{
      return(
      <Redirect to={{pathname: "/"}} />
      )
    }
  }
}

export default ViewParent;
