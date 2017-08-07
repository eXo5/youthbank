import React from 'react';
import {Navbar, SideNav, SideNavItem,Button, Col, Footer, Dropdown, NavItem, Modal, Row, Icon, Input} from 'react-materialize';
import banner from '../../img/ChildView/banner-child.png';
import navBg from '../../img/ChildView/nav-background.jpg';
import icon from '../../img/ChildView/vectorChild.png';
import helper from '../../utils/thehelp/helper.js'


const newState = {};


class NavSidebar extends React.Component {
  constructor() {
    super()

    this.state = {
      //state for new task
      task: "",
      descript: "",
      amount: "",

      //state for new kid
      kidName: "",
      kidUN: "",
      kidPW: "",

      goalItem: "",
      goalValue: "",

      timeGreeting:""

    }
  }

  //sets state of data put in input fields
  handleChange = (event) => {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(
      newState
    );

    console.log("This State: " + JSON.stringify(this.state));

  }//end of handleChange

   handleSubmit = (event, goalItem, goalValue) => {
    event.preventDefault()
    console.log("handleSubmit")
    helper.postGoal(this.state.goalItem, this.state.goalValue)

    this.setState({
      goalItem: "",
      goalValue: ""
      })
  }




	render(){
		return (
 	<div> 

    <header>
      <div className="">
          <Navbar brand='Young Money' right className="NavbarCSS ">
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
            
            <NavItem>Edit An Existing Task</NavItem>
          </Dropdown>
          
           {/* MANAGE CHILDREN */}
          <Dropdown trigger={
              <SideNavItem href='#!second' icon='face'>Manage Goal</SideNavItem>
            }>

          {/* MODAL FOR NEW CHILD */}
            <Modal
              header='Add A Goal'
              fixedFooter
              trigger={
                <NavItem>Modify Existing Goal</NavItem>
              }>
              <Row>
                <form>
                  <Input s={12} label="Child Name" id="kidName" value={this.state.kidName} onChange={this.handleChange}><Icon>face</Icon></Input>
                  <Input s={12} label="User Name" id="kidUN" value={this.state.kidUN} onChange={this.handleChange}><Icon></Icon></Input>
                  <Input s={12} label="Password" id="kidPW" value={this.state.kidPW} onChange={this.handleChange}><Icon></Icon></Input>
                  <Button waves='light' node='a' className="mainBtn" href='http://www.google.com'>Submit</Button>
                </form>
              </Row>
            </Modal>
            
            <NavItem>Edit </NavItem>
          </Dropdown>

          <Dropdown trigger={
              <SideNavItem href='#!second' icon='face'>Add A Goal</SideNavItem>
            }>

          {/* MODAL FOR NEW CHILD */}
            <Modal
              header='Add A Goal '
              fixedFooter
              trigger={
                <NavItem>Add A Goal</NavItem>
              }>
              <Row>
                <form>
                  <Input s={12} label="goalItem" id="goalItem" value={this.state.goalItem} onChange={this.handleChange}><Icon></Icon></Input>
                  <Input s={12} label="goalValue" id="goalValue" value={this.state.goalValue} onChange={this.handleChange}><Icon></Icon></Input>
                  <Button onClick={this.handleSubmit} waves='light' node='a' className="mainBtn">Submit</Button>
                </form>
              </Row>
            </Modal>
            
            <NavItem>Edit </NavItem>
          </Dropdown>

           {/* MENU FOOTER */}
          <Footer className="page-footer">
              <Button waves='light' className="mainBtn">LogOut</Button>
          </Footer>

        </SideNav>


            <li className="navItems">

              


            </li>
          </Navbar>

        </div> 
   </header>
       

   
        
      </div>

    )
  }
}

export default NavSidebar