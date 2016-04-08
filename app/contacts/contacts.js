'use strict';

angular.module('myContacts.contacts', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contacts', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var db = new Firebase('https://ngloginapp.firebaseio.com');

  $scope.contacts = $firebaseArray(db);
  
  $scope.showAddForm = function () {
    $scope.addFormShow = true; 
  };

  $scope.addFormSubmit = function () {
    $scope.addFormShow = false;
  };
}]);