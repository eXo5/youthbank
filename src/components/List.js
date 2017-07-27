import React from 'react';
import {Row, Input} from 'react-materialize';

class List extends React.Component {

	constructor(){
		super();

		this.state = {
			list: ""
		}
	};// end of constructor

	render(){
		return(

			
			<Row>
				<Input name='group1' type='checkbox' value='red' label='Do the dishes' /><br />
				<Input name='group1' type='checkbox' value='red' label='Mow the lawn' /><br />
				<Input name='group1' type='checkbox' value='red' label='Wash the car' /><br />
				<Input name='group1' type='checkbox' value='red' label='Help Mr. Jones with his yardwork' /><br />
			</Row>


			)
	};//end of render
}

export default List;