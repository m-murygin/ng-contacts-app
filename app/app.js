'use strict';

angular.module('myContacs', [
  'ngRoute',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/contacs'});
}]);
