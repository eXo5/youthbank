import React from 'react';
import {Row, Col, Card} from 'react-materialize';
import axios from 'axios';
// import helper from '../../utils/thehelp/helper.js';


class Goals extends React.Component {

	constructor() {
         super()

         this.state = {
          currentGoals: []

      };
     this.componentDidMount.bind(this);
  }

	
	componentDidMount(){
		var currentGoals = []; //trying to get goals to display in realtime with accordance to user
		axios.get("api/get/goals").then(function(results){
			for(var i = 0;i<results.data.goal.length;i++){
			console.log(results.data.goal[i].goalItem);
			currentGoals.push(results.data.goal[i].goalItem);
			}
			console.log(currentGoals);
			this.setState({currentGoals:currentGoals});
			console.log(this.state.currentGoals);
			
		}).catch(function(error){
			console.log(error);
		})
		
			// console.log("This state: " + this.state.currentGoals),

	}



	render(){
		return(
				<Col m={6} s={12}>
					<Card className='blue-grey darken-1' textClassName='white-text' title='Current Goal'>
					<h2>{this.state.currentGoals}</h2>
					</Card>
                 </Col>

		)
	}
}


export default Goals;
