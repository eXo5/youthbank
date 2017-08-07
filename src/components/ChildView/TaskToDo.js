import {Row, Col, Input} from 'react-materialize';
import React from 'react';
// import List from './List';
import '../../index.css';

class TaskToDo extends React.Component {

  render(){
    return(
        <Row>
            
            <Col >
              <hr />
                <h6>Tasks To Do</h6>
                  <Input name='group1' type='checkbox' value='red' label='Do the dishes' /><br />
                  <Input name='group2' type='checkbox' value='red' label='Mow the lawn' /><br />
                  <Input name='group3' type='checkbox' value='red' label='Wash the car' /><br />
                  <Input name='group4' type='checkbox' value='red' label='Help Mr. Jones with his yardwork' /><br />
                  <hr />
            </Col>
        </Row>
    )
  }
}


export default TaskToDo;
