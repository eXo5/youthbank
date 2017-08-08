import React from 'react';
import {Row, Col, Collapsible, CollapsibleItem, Button} from 'react-materialize';

const AvailTasks = props => {
  

    // const allYourKids = this.state.children;
    const listChoreCards = props.choreList.map((chore, i) => 
      (     
         <Collapsible key={i}>
						<CollapsibleItem header={chore.choreName} icon='star'>
							<em>Worth:</em> ${chore.choreValue}<br/>
							<em>Description:</em><br/>
							{chore.choreDesc}

						<br /><br />
						<Button floating className='red' waves='light' icon='add' />
					</CollapsibleItem>
					</Collapsible>
      )
    );

  return(
      
      
      <Row>
						
						<Col>
								{listChoreCards}
						</Col>
				</Row>
        
          
        
      

   

      )
        
  }




export default AvailTasks;