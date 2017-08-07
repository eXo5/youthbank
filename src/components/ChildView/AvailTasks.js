import React from 'react';
import {Row, Col, Collapsible, CollapsibleItem, Button} from 'react-materialize';

class AvailTasks extends React.Component {
	render(){
		return(
				<Row>
						
						<Col>
									<h6> Open Tasks: </h6>
									<Collapsible>
										<CollapsibleItem header='Walk Dogs' icon='pets'>
											Worth: $8. Other details..
											<br /><br />
											<Button floating small className='red' waves='light' icon='add' />
										</CollapsibleItem>
										<CollapsibleItem header='Take Out Trash' icon='delete'>
											Worth: $3. Other details..
											<Button floating small className='red' waves='light' icon='add' />
										</CollapsibleItem>
										<CollapsibleItem header='Paint Garage' icon='format_paint'>
											Worth: $25. Other details..
											<Button floating small className='red' waves='light' icon='add' />
										</CollapsibleItem>
									</Collapsible>
						</Col>
				</Row>
									
		)
	}
}

export default AvailTasks;