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
                <h6>Recent Completed Tasks</h6>
                  <Input name='group1' type='checkbox' value='red' label='Mop the Floor' className='filled-in' defaultChecked='checked' /><br />
                  <Input name='group2' type='checkbox' value='red' label='Mow the lawn' className='filled-in' defaultChecked='checked'/><br />
                  <Input name='group3' type='checkbox' value='red' label='Wash the car' className='filled-in' defaultChecked='checked'/><br />
                  <Input name='group4' type='checkbox' value='red' label='Help Mr. Jones with his yardwork' className='filled-in' defaultChecked='checked' /><br />
                  <hr />
            </Col>
        </Row>
    )
  }
}


export default TaskToDo;
