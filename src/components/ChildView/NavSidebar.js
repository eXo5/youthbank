import React from 'react';
import {Navbar, SideNav, SideNavItem,Button, Footer, Dropdown, NavItem, Modal, Row, Icon, Input} from 'react-materialize';
// import banner from '../../img/ChildView/banner-child.png';
import navBg from '../../img/ChildView/nav-background.jpg';
import icon from '../../img/ChildView/vectorChild.png';
import helper from '../../utils/thehelp/helper.js'


// const newState = {};


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
      goalValue: ""

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
              name: 'Molly'
            }}
          />

        {/* MANAGE TASKS */}
          <Dropdown trigger={
            <SideNavItem href='#!icon' icon='list'>Manage Tasks</SideNavItem>
            }>
            
            <NavItem>Edit Existing Tasks</NavItem>
          </Dropdown>
          
           {/* MANAGE CHILDREN */}
          <Dropdown trigger={
              <SideNavItem href='#!second' icon='face'>Manage Goals</SideNavItem>
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
                  <Input s={12} label="Goal" id="kidName" value={this.state.kidName} onChange={this.handleChange}><Icon>face</Icon></Input>
                  <Input s={12} label="Cost" id="kidUN" value={this.state.kidUN} onChange={this.handleChange}><Icon></Icon></Input>
                  <Button waves='light' node='a' className="mainBtn" href='http://www.google.com'>Submit</Button>
                </form>
              </Row>
            </Modal>
            
            {/* MODAL FOR NEW CHILD */}
            <Modal
              header='Add A Goal '
              fixedFooter
              trigger={
                <NavItem>Add A Goal</NavItem>
              }>
              <Row>
                <form>
                  <Input s={12} label="Goal" id="goalItem" value={this.state.goalItem} onChange={this.handleChange}><Icon></Icon></Input>
                  <Input s={12} label="Cost" id="goalValue" value={this.state.goalValue} onChange={this.handleChange}><Icon></Icon></Input>
                  <Button onClick={this.handleSubmit} waves='light' node='a' className="mainBtn">Submit</Button>
                </form>
              </Row>
            </Modal>
            
          </Dropdown>

         

          
            
           

           {/* MENU FOOTER */}
          <Footer className="SideNav-footer">
              <Button type="submit" waves='light' className="mainBtn" onClick={this.props.logEmOut}>LogOut</Button>
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