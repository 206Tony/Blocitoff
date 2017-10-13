(function() {
	function MainCtrl($firebaseArray) {
		var ref = firebase.database().ref().child('tasks');
		this.tasks = $firebaseArray(ref);

		this.hide = function(task) {
    return task.created < (moment().dayOfYear() - 7) || task.completed == true
    };
		
		this.addTask = function(newTask, taskId) {
			this.tasks.$add({ 
				title: newTask, 
				completed: false, 
				description: " ", 
				expired: false,
				created: moment().dayOfYear() 
			});
				return newTask
			this.addTask = ' '
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