'use strict';

angular.module('myContacts.contacts', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactCtrl'
  });
}])

.controller('ContactCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  console.log($scope);
}]);