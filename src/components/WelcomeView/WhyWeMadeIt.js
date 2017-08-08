import React from 'react';
import {Row, Col, Icon} from 'react-materialize';
import '../../index.css'; 

class Why extends React.Component {
	render(){
		return(
			<div className="WhyComp">
				<Row>
			    		<Col s={3} className="">
			    		</Col>

			    		<Col s={2} className="WhyComp1">
			    			<Icon medium> thumb_up </Icon>
			    			<h5> Simple </h5>
			    			<p> Easy-to-use application, helps you and your child keep track of the many chores that come up when trying to organize a busy household. </p>
			    		
			    		</Col>
			    		<Col s={2} className="WhyComp1">
			    			<Icon medium> restore </Icon>
			    			<h5> Time-Saving </h5>
			    			<p> By incentivizing your children to do chores, save yourself time from having to do tasks.</p>
			    			 
			    		</Col>
			    		<Col s={2} className="WhyComp1">
			    			<Icon medium> home </Icon>
			    			<h5> Effective </h5>
			    			<p> Help your children learn the value of their earning potential by letting them set their own goals and work toward them. </p>

			    			
			    		</Col>
			    		<Col s={3} className="">
			    		</Col>
		    		</Row>

			</div>

		)
	}
}
export default Why;