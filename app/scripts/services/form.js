'use strict';

angular.module('questionnaireApp')
  .factory('form', function () {
    var blocks = [
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
        'blockType': 'yesNoQuestion',
        'name': 'liveAtWork',
        'text': 'Do you live at work?'
      },
      {
        'blockType': 'addressQuestion',
        'name': 'workAddress',
        'text': 'What\'s your work address?',
        'show': 'liveAtWork'
      }
    ];

    // Public API here
    return {
      blocks: function () {
        return blocks;
      }
    };
  });
