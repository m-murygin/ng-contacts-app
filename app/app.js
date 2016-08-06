'use strict';

angular.module('myContacs', [
  'ngRoute',
  'firebase',
  'myContacts.contacts'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/contacts'});
}]);
