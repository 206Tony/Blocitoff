(function() {
	function Task($firebaseArray) {
		var ref = firebase.database().ref().child('tasks');
		var tasks = $firebaseArray(ref);

		tasks.forEach(function(task) {
			var currentTime = new Date();
				if ((currentTime - task.created) < 605000){
					task.expired = true;
					tasks.$save(task);
					return true;
				} else {
					return false;
					
				};
		});
	};

	angular
		.module('blocitoff')
		.factory('Task', ['$firebaseArray', Task]);
})();