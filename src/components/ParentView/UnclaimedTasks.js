import {Row, Col, Input} from 'react-materialize';
import React from 'react';
// import List from './List';
import '../../index.css';

const TaskToDo = props => {
  

    // const allYourKids = this.state.children;
    const listChoresHere = props.choreList.map((task, i) => 
      (   
        <div key={i}>  
          <Input name='group1' type='checkbox' value='red' label={task.choreName} /><br />
        </div>
      )
    );

  return(

      <Row> 
        <Col s={12}>
          <hr />
            <h6>Unclaimed Tasks</h6>
              {listChoresHere}<br />
            <hr />
        </Col>
      </Row>
    )
        
  }




export default TaskToDo;
