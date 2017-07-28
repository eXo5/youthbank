import React from 'react';
import {Row, Input, Col, Button} from 'react-materialize';

class List extends React.Component {

	constructor(){
		super();

		this.state = {
			list: ""
		}
	};// end of constructor

	render(){
		//for future use to display tasks, sample code
		/*
			const tasks = this.state.list;
	    const listTasks = tasks.map((task, index) => 
				(    	
	        <Input type="checkbox" value="completed" label={tasks.task}> /><br />
	      )
			);
		*/

		return(

			
			<Row>
				<Col s={12}>
					<h6>Tasks Awaiting Approval</h6>
						<Input name='group1' type='checkbox' value='red' label='Do the dishes' /><br />
						<Input name='group2' type='checkbox' value='red' label='Mow the lawn' /><br />
						<Input name='group3' type='checkbox' value='red' label='Wash the car' /><br />
						<Input name='group4' type='checkbox' value='red' label='Help Mr. Jones with his yardwork' /><br />
						<hr />
						<Button waves='light' node='a' href='http://www.google.com'>Submit</Button>
				</Col>
			</Row>


			)
	};//end of render
}

export default List;