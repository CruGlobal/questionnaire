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
      },
      {
        'blockType': 'addressQuestion',
        'name': 'homeAddress',
        'text': 'What\'s your home address?'
      },
      {
        'blockType': 'addressQuestion',
        'name': 'workAddress',
        'text': 'What\'s your work address?'
      }
    ];
  });
