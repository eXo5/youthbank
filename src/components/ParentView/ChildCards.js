import {Collapsible, CollapsibleItem, Col} from 'react-materialize';
import React from 'react';
import List from './List';
import '../../index.css';

class ChildCards extends React.Component {

render(){

  return(
      <Col s={12}>
        <div>

          <Collapsible popout>
            <CollapsibleItem className='childCard' header='Jane' icon='filter_drama'>
              <List />
            </CollapsibleItem>
          </Collapsible>

        <Collapsible popout>
          <CollapsibleItem className='childCard' header='Sarah' icon='filter_drama'>
            <List />
          </CollapsibleItem>
        </Collapsible>
        
      </div>

    </Col>

      )
  }
}

export default ChildCards;
