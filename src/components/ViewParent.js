import React from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';
import './viewParent.css';
import List from './List';


class ViewParent extends React.Component {

render() {

  return(
  <div className="container">

      <div className="row">
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

      <div className="row">
        <Collapsible popout>
          <CollapsibleItem className='childCard' header='Mike' icon='filter_drama'>
            <List />
          </CollapsibleItem>
        </Collapsible>

        <Collapsible popout>
          <CollapsibleItem className='childCard' header='George' icon='filter_drama'>
            <List />
          </CollapsibleItem>
         </Collapsible>
       </div>

    </div>
  )
}
}

export default ViewParent;

