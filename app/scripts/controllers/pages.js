'use strict';

angular.module('questionnaireApp')
  .controller('PagesCtrl', function (form, $scope) {
    $scope.answers = {};

    $scope.blocks = form.blocks();

    $scope.add = function() {
      form.addBlock({
        'blockType': 'paragraph',
        'text': 'This is a test.'
      })
    }
  });
