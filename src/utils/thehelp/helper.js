// Here we will utilize the axios library to perform GET/POST requests
import axios from 'axios';
var moment = require('moment');

var helper = {
  
  logOneIn: function(email, password) {
      console.log(email)
      console.log(password)
      axios.post("/auth/login/parent", {
              email: email,
              password: password
          })
          .then(function(results) {
              return console.log(results)
          })
  },

  logInChild: function(email, password) {
      console.log(email)
      console.log(password)
      axios.post("/auth/login/child", {
              email: email,
              password: password
          })
          .then(function(results) {
              return console.log(results)
          })
  },

  postParent: function(email, password, firstName, lastName) {
      return axios.post("/auth/api/new/parent", {
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName
      });
      // .then(function(results){
      // 	return console.log(results)
      // })

  },

  postChild: function(email, password, firstName, lastName, age) {
      return axios.post("/auth/api/new/child", {
              email: email,
              password: password,
              firstName: firstName,
              lastName: lastName,
              age: age
          })
          .then(function(results) {
              console.log(results);
          });
  },

  editChild: function(id, firstName, lastName, email, age) {
      return axios.post("/api/post/editchild", {
              id: id,
              firstName: firstName,
              lastName: lastName,
              email: email,
              age: age
          })
          .then(function(results) {
              console.log(results)
          });

  },


  postChore: function(choreName, choreDesc, choreValue) {
      console.log(choreName)
      console.log(choreDesc)
      console.log(choreValue)
          //when new chore is posted, drop spaces and input underscores in choreName.
      var choreRegExp = choreName.replace(/ /g, "_");
      axios.post("/api/post/chores", {
              choreName: choreRegExp,
              choreDesc: choreDesc,
              choreValue: parseFloat(choreValue)
          })
          .then(function(results) {
              return results;
          });
  },
  postEditedChore: function(choreId, choreName, choreDesc, choreValue, choreComplete, choreChildSaysComplete, chorePastDue) {
      console.log(choreId)
      return axios.post("/api/post/editedchore", {
              choreId: choreId,
              choreName: choreName,
              choreDesc: choreDesc,
              choreValue: parseFloat(choreValue),
              choreComplete: choreComplete,
              childSaysComplete: choreChildSaysComplete,
              chorePastDue: chorePastDue
          })
          .then(function(results) {
              console.log(results)
              return results;
          })
  },

  getChildInfo: function() {
      return axios.get("/api/get/childinfo")
  },

  getChores: function() {
      return axios.get("/api/get/pchores")

  },

  getOneChore: function(choreId) {
      return axios.post("/api/get/onechore/", {
          _id: choreId
      }).then(function(results) {
          return results;
      })
  },

   choreComplete: function(choreId){ 
    return axios.post("/api/post/chorecomplete", {choreId: choreId})
  .then(function(results){      
  })

},
  //NOt 100% sure about returning axios verbs other than get.
  deleteChore: function(choreName) {
      console.log(choreName);
      axios.delete("/api/delete/" + choreName, function(results) {
          console.log(results);
      });
  },

  postGoal: function(goalItem, goalValue) { //helper function for kids to post goals
      console.log(goalValue);
      console.log(goalItem);
      axios.post("/api/new/goals", {
          goalItem: goalItem,
          goalValue: parseFloat(goalValue)
      }).then(function(results) {
          console.log(results);
      })
  },

  getTime: function() { //creating a new function for displaying the right time message

      var currentTime = new Date();
      var hour = currentTime.getHours();
      var min = currentTime.getMinutes();
      var sec = currentTime.getSeconds();
      currentTime =  hour + ":" + min + ":" + sec;
      console.log("current Time " + currentTime);
      // alert("current Time is" + hour + ":" + min + ":" + sec);
      console.log("current Time is " + hour + ":" + min + ":" + sec);

      if(hour >= 2 && hour < 12 ){ //if the current hour is greater than or equal to 2am and less than 12pm
        return "Good Morning";
        console.log("Good Morning");
      }else if(hour >= 12 && hour < 18){ //if the current hour is greater than or equal to 12pm and less than 6 pm
        return "Good Afternoon";
        console.log("Good Afternoon");

      }else{
        return "Good Evening";
        console.log("Good Evening"); //if the current hour is greater than or equal to 6pm and less than 2 am
      }





  }
}

   export default helper
