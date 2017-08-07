import React from 'react';
// import {Navbar, Card, CardTitle, SideNav, SideNavItem,Button, Col, Dropdown, NavItem, Modal, Row, Icon, Input} from 'react-materialize';
import {Col, Row, Card, CardTitle, Collapsible, CollapsibleItem, Button } from 'react-materialize';
import '../../index.css';
import NavSidebar from './NavSidebar';
import Goal from './Goal';
import MoneyEarned from './MoneyEarned';
import AvailTasks from './AvailTasks';
import TaskToDo from './TaskToDo';
import { Redirect } from 'react-router-dom';
import helper from '../../utils/thehelp/helper.js'
import CompletedTas from './CompletedTas';
import PgFooter from './Footer'
import banner from '../../img/ChildView/banner-child.png';
import navBg from '../../img/ChildView/nav-background.jpg';
import background from '../../img/ChildView/background1.png';

const newState = {};

class ViewChild extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      //state for chores
      siblings: [],
      parents:[],
      chores:[],

      //state for new kid
      firstName: "",
      lastName: "",
      email:"",
      age:"",
      parent:"",

      timeGreeting:""

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

fillChores = () => {

      helper.getChildInfo()
    .then(results => {
      console.log(results)
      var newChores = [];
      //push chores into newChores for setting state
      for (var i = 0; i < results.data.chores.length; i++) {
        var id = results.data.chores[i]._id;
        var choreName = results.data.chores[i].choreName.replace(/_/g, " ");
        var choreDesc = results.data.chores[i].choreDesc;
        var choreValue = results.data.chores[i].choreValue;
        var complete = results.data.chores[i].complete;
        var childSaysComplete = results.data.chores[i].childSaysComplete;
        var pastDue = results.data.chores[i].pastDue;
        newChores.push({
          _id: id,
          choreName: choreName, 
          choreDesc: choreDesc, 
          choreValue: choreValue, 
          complete: complete, 
          childSaysComplete: childSaysComplete, 
          pastDue: pastDue})
      
    }
    this.setState({chores: newChores})
  })
 }   

componentDidMount(){
  this.fillChores()
    console.log(helper.getTime());
    this.setState({timeGreeting: helper.getTime()}, () => {
console.log("greeting: " + this.state.timeGreeting);
    });
    
   
}


  render() {
    console.log("VIEW CHILD this.props.loggedIn: " + this.props.loggedIn);
    if (this.props.loggedIn) {


    return(
      <div>

      <NavSidebar />
        <Row>
          <Col s={3} className='grid-example'>

              <TaskToDo />
              <CompletedTas />
          </Col>

        {/*HERE GOES AVAILABLE TASKS*/}
          <Col s={9} className='grid-example'>
            <Card className='small'
              header={<CardTitle reveal image={background} waves="light"> {this.state.timeGreeting}</CardTitle>}
              actions={[<a href='google.com'> </a>]}>
              Keep working on your goal for Concert Tickets!
            </Card>
       
              <Row>
                <Col s={5} className='grid-example AvailTasks'>

                  <AvailTasks chores={this.state.chores}/>
                </Col> 
                <Col s={7} className='grid-example'>
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
          <PgFooter />
      </div>
    )
  }
  else if (this.props.loggedIn === null) {
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

export default ViewChild
