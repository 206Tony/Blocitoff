(function() {
	function HomeCtrl($firebaseArray) {
		var ref = firebase.database().ref().child('tasks');
		this.tasks = $firebaseArray(ref);
		
		this.addTask = function(newTask, taskId) {
			var now = new Date();
			this.tasks.$add({ 
				text: newTask, 
				completed: false, 
				expired: false, 
				created: now.getTime() 
			});
			this.addTask = ' '
		}
	};


	angular
		.module('blocitoff')
		.controller('HomeCtrl', ['$firebaseArray', HomeCtrl]);
})();