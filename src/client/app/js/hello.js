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
    		username : "brycepj@gmail.com",
    		first_name : "bryce", 
    		last_name : "johnson"
    	};

		$http.post('/api/judds', data)
		.success(function(resp) {
			$scope.tester = resp;
		});    	
        
    
    })
    .controller('NavCtrl', function($scope) {
    	$scope.tester = "Hello Nav";
    });


// person

// {
// 	email: 'email', 
// 	name: {
// 		first_name: 'string',
// 		last_name: 'string', 
// 		full_name: 'string',
// 	},
// 	answers: {},
// 	questions: {},
// 	feedback: {}

// }