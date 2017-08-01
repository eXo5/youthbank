import React from 'react';
import {Row, Col} from 'react-materialize';
import '../../index.css'; 

class Why extends React.Component {
	render(){
		return(
			<div className="WhyComp">
				<Row>
			    		<Col s={3} className="">
			    		</Col>
			    		<Col s={2} className="">
			    			<h5> Content One </h5>
			    			<p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
			    			sed do eiusmod tempor incididunt ut labore et dolore magna 
			    			aliqua. </p>
			    		
			    		</Col>
			    		<Col s={2} className="">
			    			<h5> Content Two </h5>
			    			<p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
			    			sed do eiusmod tempor incididunt ut labore et dolore magna 
			    			aliqua.  </p>
			    			 
			    		</Col>
			    		<Col s={2} className="">
			    			<h5> Content Three </h5>
			    			<p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
			    			sed do eiusmod tempor incididunt ut labore et dolore magna 
			    			aliqua. </p>
			    			
			    		</Col>
			    		<Col s={3} className="">
			    		</Col>
		    		</Row>

			</div>

		)
	}
}
export default Why;