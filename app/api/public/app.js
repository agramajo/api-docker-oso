
angular.module('app', ['ngRoute'])
.config(function($routeProvider,$httpProvider) {
    
    $routeProvider
    
    .when('/', {
        controller: 'home',
        templateUrl: 'home.html',
        controllerAs: 'vm'
    })

    .when('/login', {
        controller: 'login',
        templateUrl: 'login.html',
        controllerAs: 'vm'
    })

    .otherwise('/');

})

.controller('home', function($scope, $http) {

})

.controller('login', function() {

});
