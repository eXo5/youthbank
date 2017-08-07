import React from 'react';
import { Col, Card} from 'react-materialize';


class Goals extends React.Component {
	render(){
		return(
				<Col m={6} s={12}>
					<Card className='blue-grey darken-1' textClassName='white-text' title='Current Goal: Concert Tickets for $40'>
					You are $10 away from your Goal!
					</Card>
</Col>
		)
	}
}


export default Goals;
