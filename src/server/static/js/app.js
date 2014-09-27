angular.module('juddFeud', ['ui.router'])

	.config(function($stateProvider) {
		$stateProvider
			.state('help', {
				url:'help',
				templateUrl: 'partials/topnav.html',
				controller:'NavCtrl'
			});
	})
    
    .controller('QuizCtrl', function($scope, $http) {

    	var data = {
    		u: "d",
    	};

		$http.post('/api/judds', data)
		.success(function(resp) {
			$scope.tester = resp;
		});    	
        
    
    })
    .controller('NavCtrl', function($scope) {
    	$scope.tester = "Hello Nav";
    });

