(function() {
	function config($locationProvider, $stateProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});

		$stateProvider
			.state('main', {
				url: '/',
				controller: 'MainCtrl as main',
				templateUrl: '/templates/main.html'
			})

			.state('history', {
				url: '/',
				controller: 'HistoryCtrl as history',
				templateUrl: '/templates/history.html'
			});
	}
	angular
		.module('blocitoff', ['ui.router', 'firebase'])
		.config(config);
})();