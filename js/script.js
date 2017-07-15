
angular.module("ngRouteApp",['ngRoute']).
config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/', {
      templateUrl: './views/home.html',
      controller: 'HomeController'
   }).

    when('/About', {
      templateUrl: './views/about.html',
      controller: 'AboutController'
   }).
   
   when('/Contact', {
      templateUrl: './views/contact.html',
      controller: 'ContactController'
   }).
   
   otherwise({
      redirectTo: '/'
   });
}]).

controller('HomeController', function($scope) {
   $scope.viewContent = "This is the Home page";
}).

controller('AboutController', function($scope) {
   $scope.viewContent = "This is the About page";
}).

controller('ContactController', function($scope) {
   $scope.viewContent = "This is the Contact page";
});