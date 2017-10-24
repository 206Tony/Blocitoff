(function() {
	function Task($firebaseArray) {
		var ref = firebase.database().ref().child('tasks');
		var tasks = $firebaseArray(ref);

		  tasks.$loaded().then(function(){
      tasks.forEach(function(task) {
        var currentTime = new Date();
        console.log("currentTime is " + currentTime);
        console.log("task.created is " + task.created);
        console.log("currentTime.getTime() is " + currentTime.getTime());
        if ((currentTime.getTime() - task.created) >= 6050000){
          task.expired = true;
          tasks.$save(task);
          return true;
        } else {
          return false;
        }
      });
    });
  }
	angular
		.module('blocitoff')
		.run(['$firebaseArray', Task]); 
})();