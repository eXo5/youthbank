import React from 'react';
import {Navbar, Card, CardTitle, SideNav, SideNavItem,Button, Col, Dropdown, NavItem, Modal, Row, Icon, Input} from 'react-materialize';
import '../../index.css';
import NavSidebar from './NavSidebar';
import Goals from './Goal';
import axios from 'axios';
import MoneyEarned from './MoneyEarned';
import AvailTasks from './AvailTasks';
import TaskToDo from './TaskToDo';
import PgFooter from './Footer'
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
    this.getGoal.bind(this);
  }

  //sets state of data put in input fields
  handleChange = (event) => {
    
    newState[event.target.id] = event.target.value;
    this.setState(
      newState
    );

    console.log("This State: " + JSON.stringify(this.state));

  }//end of handleChange


  getGoal = (event) =>{
      var currentGoals = []; 
    //trying to get goals to display in realtime with accordance to user
    // getGoal = () => {
    axios.get("api/get/goals").then(function(results){
      for(var i = 0;i<results.data.goal.length;i++){
      console.log(results.data.goal[i].goalItem);
      currentGoals.push(results.data.goal[i].goalItem);
      }
      console.log(currentGoals);
      this.setState({currentGoals:currentGoals});
      console.log(this.state.currentGoals);
      
    }).catch(function(error){
      console.log(error);
    })
  }



  render() {

    return(
      <div>

        <NavSidebar />

        <Row>
          <Col s={3} className='grid-example'>
              <TaskToDo />
          </Col>

        {/*HERE GOES AVAILABLE TASKS*/}
          <Col s={9} className='grid-example'>
            <Card className='small'
              header={<CardTitle reveal image={background} waves="light"> Good Evening Alex </CardTitle>}
              actions={[<a href='#'></a>]}>
              Keep working on your goal for Concert Tickets!
            </Card>

              <Row>
                <Col s={4} className='grid-example AvailTasks'>
                  <AvailTasks />
                </Col> 
                <Col s={8} className='grid-example'>
                  <Row> 
                    <Col s={12} className='grid-example'>
                      <MoneyEarned />
                    </Col>
                  </Row>
                  <Row>
                    <Col s={12} className='grid-example'>
                      <Goals getGoal={this.getGoal} />
                    </Col>
                  </Row>
                </Col> 
              </Row>
          </Col>
        </Row>
          <PgFooter />
      </div>
    )
  }
}

export default ViewChild