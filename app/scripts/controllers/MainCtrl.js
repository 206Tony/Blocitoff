(function() {
	function MainCtrl($firebaseArray) {
		var ref = firebase.database().ref().child('tasks');
		this.tasks = $firebaseArray(ref);
		this.setPriority = "Low";

		this.hide = function(task) {
    return task.created < (moment().dayOfYear() - 7) || task.completed == true
    };
		
		this.addTask = function(newTask, taskId) {
			this.tasks.$add({ 
				title: this.newTask, 
				completed: false, 
				priority: this.setPriority, 
				expired: false,
				created: firebase.database.ServerValue.TIMESTAMP 
			});
				return newTask
			this.newTask = ' '
		}

		this.completedTask = function(task) {
			task.completed = true;
			this.tasks.$save(task);
		}

	};

	angular
		.module('blocitoff')
		.controller('MainCtrl', ["$firebaseArray", MainCtrl]);
})();