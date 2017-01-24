'use strict';

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  	$routeProvider.
  		when('/', {
  			templateUrl: 'components/home/home.html',
  			controller: 'HomeCtrl'
  		}).
  		when('/services', {
    		templateUrl: 'components/services/services.html',
    		controller: 'ServicesCtrl'
  		}).
  		when('/contact', {
    		templateUrl: 'components/contact/contact.html',
    		controller: 'ContactCtrl'
  		}).
  		otherwise({
  			redirectTo: '/'
  		});

  	// Remove # from URL
    $locationProvider.html5Mode(true);
}]);
