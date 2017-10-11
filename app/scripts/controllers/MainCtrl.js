(function() {
	function MainCtrl(Task, $scope) {
		this.tasks = Task.all;

		this.hide = function(task) {
			return task.created < (moment().dayOfYear() - 7) || task.completed == true
		};
		
		this.addTask = function(newTask) {
			this.tasks.$add({ 
				title: this.newTask, 
				completed: false, 
				description: this.description, 
				created: firebase.database.ServerValue.TIMESTAMP
			});
			return newTask
			this.newTask = ' '
		}

	};

	angular
		.module('blocitoff')
		.controller('MainCtrl', ['Task', '$scope', MainCtrl]);
})();