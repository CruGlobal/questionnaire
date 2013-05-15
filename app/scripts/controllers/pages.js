'use strict';

angular.module('questionnaireApp')
  .controller('PagesCtrl', function ($scope) {
    $scope.blocks = [
      {
        'blockType': 'paragraph',
        'text': 'Lorem Ipsum dolor sit amet.'
      },
      {
        'blockType': 'line'
      }
    ];
  });
