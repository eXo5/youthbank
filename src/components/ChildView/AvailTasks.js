import React from 'react';
import {Row, Col, Collapsible, CollapsibleItem, Button} from 'react-materialize';
import helper from '../../utils/thehelp/helper.js'

class AvailTasks extends React.Component {
	constructor(props){
		super(props)

	}
	handleSubmit = (event) => {
		event.preventDefault();
		helper.choreComplete(event)
			.then(results=>{
				console.log(results)
				return alert("Your parents have been updated.")
			})
	}
	render(){
		      var showChores = 
        		this.props.chores.map((element,i)=>{
		      
          return (
           <CollapsibleItem header={element.choreName}>
    	  	  <div>
    	  	      <p>Description: {element.choreDesc}</p>
      	        <p>Worth: {element.choreValue}</p>
              <Button id={element.id} onClick={this.handleSubmit} floating small className="red" waves="light" icon="add">Submit</Button>
            </div>
           </CollapsibleItem>
            )
        })
       
		return(
				<Row>
						
						<Col>
							<h6> Open Tasks: </h6>
							<Collapsible>
									{showChores}
							</Collapsible>		
						</Col>
				</Row>
									
		)

export default AvailTasks;