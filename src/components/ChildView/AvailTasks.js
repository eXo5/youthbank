import React from 'react';
import {Row, Col, CardPanel, Input} from 'react-materialize';

class AvailTasks extends React.Component {
	render(){
		return(
				<Row>
						
						<Col >
								<h6>Tasks Awaiting Approval</h6>
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

export default AvailTasks;