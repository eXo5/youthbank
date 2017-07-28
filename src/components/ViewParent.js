import React from 'react';
import {SideNav, SideNavItem, Button, Col, Footer, Dropdown, NavItem, Modal, Row, Icon, Input} from 'react-materialize';
import './viewParent.css';
// import List from './List';
import ChildCards from './ChildCards';
import banner from '../img/banner-parent.png';
import navBg from '../img/nav-background.jpg';
import icon from '../img/vectorParent.png';


class ViewParent extends React.Component {

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
              <Input s={12} label="Task"><Icon>build</Icon></Input>
              <Input s={12} label="Description of Task"><Icon></Icon></Input>
              <Input s={12} label="Amount"><Icon></Icon></Input>
              
              <Button waves='light' node='a' className="mainBtn" href='http://www.google.com'>Submit</Button>
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
        <img src={banner} className="bannerParent" />
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

