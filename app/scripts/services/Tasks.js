// (function() {
// 	function Task($firebaseArray) {
// 		var Task = {};
// 		var ref = firebase.database().ref().child("tasks");
// 		var tasks = $firebaseArray(ref);

// 		// return {
// 		// 	all: tasks,
// 		// 	send: function(newTask){
// 		// 		tasks.$add(newTask)
// 		// 	}
// 		// }
// 	};

// 	angular
// 	.module('blocitoff')
// 	.factory('Task', ['$firebaseArray', Task]);
// })();