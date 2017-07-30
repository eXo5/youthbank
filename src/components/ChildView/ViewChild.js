import React from 'react';
import {Navbar, Card, CardTitle, SideNav, SideNavItem,Button, Col, Footer, Dropdown, NavItem, Modal, Row, Icon, Input} from 'react-materialize';
import './viewChild.css';
import NavSidebar from './NavSidebar';
import Goal from './Goal';
import MoneyEarned from './MoneyEarned';
import AvailTasks from './AvailTasks';
import TaskToDo from './TaskToDo';
import banner from '../../img/ChildView/banner-child.png';
import navBg from '../../img/ChildView/nav-background.jpg';
import icon from '../../img/ChildView/vectorChild.png';
import background from '../../img/ChildView/background.jpg';
const newState = {};

class ViewChild extends React.Component {
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
      <div>

        <NavSidebar />

        <Row>
          <Col s={3} className='grid-example'>
            <AvailTasks />
          </Col>


        {/*HERE GOES AVAILABLE TASKS*/}
          <Col s={9} className='grid-example'>
            <Card className='small'
              header={<CardTitle reveal image={background} waves="light"> Good Evening Alex </CardTitle>}
              actions={[<a href='#'></a>]}>
              THIS IS TEXT
            </Card>

              <Row>
                <Col s={4} className='grid-example'>
                     <TaskToDo />
                </Col> 
                <Col s={8} className='grid-example'>
                  <Row> 
                    <Col s={12} className='grid-example'>
                      <MoneyEarned />
                    </Col>
                  </Row>
                  <Row>
                    <Col s={12} className='grid-example'>
                      <Goal />
                    </Col>
                  </Row>
                </Col> 
              </Row>

          </Col>
          
        </Row>
        
      </div>
    )
  }
}

export default ViewChild