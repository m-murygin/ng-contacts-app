'use strict';

describe('myContacts.contacts module', function() {

  beforeEach(module('myContacts.contacts'));

  describe('contacts controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('ContactsCtrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});