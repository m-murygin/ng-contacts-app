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
    $scope.contacts
      .$add({
        name: $scope.name,
        email: $scope.email || null,
        phone: $scope.phone || null,
        company: $scope.company || null
      })
      .then(function (ref) {
        var id = ref.key();
        console.log('Added contact with id %s', id);

        $scope.addFormShow = false;
        $scope.msg = 'Contact with ' + $scope.name + ' was added';

        clearFormFields();
      });
  };

  $scope.showContact = function (contact) {
    $scope.currentContact = contact;
    $scope.contactFormShow = true;
  };

  $scope.hideContactForm = function () {
    $scope.contactFormShow = false;
  };

  $scope.showEditForm = function (contact) {
    $scope.id = contact.$id;
    $scope.name = contact.name;
    $scope.email = contact.email;
    $scope.phone = contact.phone;
    $scope.company = contact.company;
    $scope.editFormShow = true;
  };

  $scope.editFormSubmit = function () {
    var id = $scope.id;

    var record = $scope.contacts.$getRecord(id);

    record.name = $scope.name;
    record.email = $scope.email;
    record.phone = $scope.phone;
    record.company = $scope.company;

    $scope.contacts
      .$save(record)
      .then(function (ref) {
        console.log('Was successfully edited %s', ref.key());
        $scope.editFormShow = false;
        clearFormFields();
      });
  };

  function clearFormFields() {
    $scope.name = null;
    $scope.email = null;
    $scope.phone = null;
    $scope.company = null;
  }
}]);