(function() {
	function HistoryCtrl(Task, $scope) {
		this.tasks = Task.all;

		this.show = function(task) {
			return task.created > (moment().dayOfYear() - 7) && task.completed == false
		};s
	}

	angular 
		.module('blocitoff')
		.controller('HistoryCtrl', ['Task', "$scope", HistoryCtrl]);
})();
