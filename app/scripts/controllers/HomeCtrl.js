(function() {
	function HomeCtrl($firebaseArray) {
		var ref = firebase.database().ref().child('tasks');
		this.tasks = $firebaseArray(ref);
		
		this.addTask = function(newTask) {
			this.tasks.$add({ 
				text: this.newTask, 
				completed: false, 
				expired: false, 
				created: firebase.database.ServerValue.TIMESTAMP
			});
			return newTask
			this.newTask = ' '
		}

		this.expiredTask = function(task) {
			var currentTime = new Date();
				if ((currentTime - task.created) >= 605000){
					return true;
				} else {
					return false;	
				}
		};

	};

	angular
		.module('blocitoff')
		.controller('HomeCtrl', ['$firebaseArray', HomeCtrl]);
})();