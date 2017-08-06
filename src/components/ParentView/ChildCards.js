import {Collapsible, CollapsibleItem, Col} from 'react-materialize';
import React from 'react';
import List from './List';
import '../../index.css';
import helper from '../../utils/thehelp/helper.js';

const ChildCards = props => {
  

    // const allYourKids = this.state.children;
    const listKids = props.childList.map((child, i) => 
      (     
        <Collapsible popout key={i}>
            <CollapsibleItem className='childCard' header={child.firstName} icon='filter_drama'>
              <List />
            </CollapsibleItem>
          </Collapsible>
      )
    );

  return(
      
      <div>

        {listKids}
          
        
      </div>

   

      )
        
  }


export default ChildCards;
