import React from 'react';
import {Row, Col, Card} from 'react-materialize';
import axios from 'axios';
import helper from '../../utils/thehelp/helper.js';


class Goals extends React.Component {

	constructor() {
         super()

         this.state = {
          currentGoals: []

      };
     // this.componentDidMount.bind(this);
  }


  


	componentDidMount(){

		helper.getGoal();
		
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