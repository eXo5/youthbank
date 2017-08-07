import React from 'react';
import {Row, Col, Card} from 'react-materialize';


class Goals extends React.Component {
	render(){
		return(
				<Col m={6} s={12}>
					<Card className='blue-grey darken-1' textClassName='white-text' title='Current Goal: Concert Tickets for $40'>
					My goal for August is to get tickets for a concert! 
					I need $35 more dollars to go. 
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					
					https://www.stubhub.com/logic-tickets/performer/722872/
					</Card>
</Col>
		)

	}
}


export default Goals;
