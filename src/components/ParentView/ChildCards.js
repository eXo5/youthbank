import {Collapsible, CollapsibleItem, Col} from 'react-materialize';
import React from 'react';
import List from './List';
import '../../index.css';
import helper from '../../utils/thehelp/helper.js';

const ChildCards = props => {
  // constructor(){
  //   super();

  //   this.state = {
  //     children: []
  //   }
  // }//end of constructor

 // componentDidMount(){

 //    helper.getChildren()
 //    .then(function(response){


 //      var results = [];
 //      // console.log("CHILDREN: " + response.data.children[0].firstName)

 //      //loops through array of objects from query from database and pushes it to newResults array with key/value pairs
 //      for (let i = 0; i < response.data.children.length; i++){
 //        var id = response.data.children[i]._id;
 //        var firstName = response.data.children[i].firstName;
 //        var age = response.data.children[i].age;
    
 //        results.push({
 //          id: id, 
 //          firstName: firstName, 
 //          age: age
 //        });
        
 //    }
 //    // console.log("id: " + id);
 //    // console.log(this)
 //    // debugger

 //    //sets state of saved articles with 'newResults' array
 //    console.log("RESULTS" + results)
 //    this.setState({ children: results});

    
 //    }.bind(this))
 //  }


// render(){

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
