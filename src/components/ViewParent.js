import React from 'react';
import {SideNav, SideNavItem, Button, Col, Footer, Dropdown, NavItem, Modal, Row, Icon, Input} from 'react-materialize';
import './viewParent.css';
// import List from './List';
import ChildCards from './ChildCards';
import banner from '../img/banner-parent.png';
import navBg from '../img/nav-background.jpg';
import icon from '../img/vectorParent.png';
const newState = {};

class ViewParent extends React.Component {
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
      kidPW: ""

    }
  }

  //sets state of data put in input fields
  handleChange = (event) => {
    
    newState[event.target.id] = event.target.value;
    this.setState(
      newState
    );

    console.log("This State: " + JSON.stringify(this.state));

  }//end of handleChange



  render() {

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
                <Input s={12} label="Task" id="task" value={this.state.task} onChange={this.handleChange}><Icon>build</Icon></Input>
                <Input s={12} label="Description of Task" id="descript" value={this.state.descript} onChange={this.handleChange}><Icon></Icon></Input>
                <Input s={12} label="Amount" id="amount" value={this.state.amount} onChange={this.handleChange}><Icon></Icon></Input>
                
                <Button type="submit" waves='light' className="mainBtn" >Submit</Button>
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
                <Input s={12} label="Child Name"><Icon>face</Icon></Input>
                <Input s={12} label="User Name"><Icon></Icon></Input>
                <Input s={12} label="Password"><Icon></Icon></Input>
                <Button waves='light' node='a' className="mainBtn" href='http://www.google.com'>Submit</Button>
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
      </div>
    )
  }
}

export default ViewParent;

