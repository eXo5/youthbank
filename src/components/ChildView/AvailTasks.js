import React from 'react';
import {Row, Col, Collapsible, CollapsibleItem} from 'react-materialize';

class AvailTasks extends React.Component {
	render(){
		return(
				<Row>
						
						<Col >
									<h6> List of Available Tasks </h6>
									<Collapsible popout>
										<CollapsibleItem header='Walk Dogs' icon='pets'>
											Worth: $8. Other details..
										</CollapsibleItem>
										<CollapsibleItem header='Take Out Trash' icon='delete'>
											Worth: $3. Other details..
										</CollapsibleItem>
										<CollapsibleItem header='Paint Garage' icon='format_paint'>
											Worth: $25. Other details..
										</CollapsibleItem>
									</Collapsible>
						</Col>
				</Row>
		)
	}
}

export default AvailTasks;