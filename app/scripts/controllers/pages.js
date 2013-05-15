'use strict';

angular.module('questionnaireApp')
  .controller('PagesCtrl', function ($scope) {
    $scope.answers = {};

    $scope.blocks = [
      {
        'blockType': 'paragraph',
        'text': 'Lorem Ipsum dolor sit amet.'
      },
      {
        'blockType': 'line'
      },
      {
        'blockType':'textQuestion',
        'name':'favAnimal',
        'text':'What\'s your favorite animal?',
        'placeholder':'Marmoset'
      }
    ];
  });
