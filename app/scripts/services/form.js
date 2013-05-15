'use strict';

angular.module('questionnaireApp')
  .factory('form', function () {
    var blocks = [
      /*
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
      */
    ];

    // Public API here
    return {
      blocks: function () {
        return blocks;
      },
      addBlock: function (block) {
        if(block.blockType === 'paragraph') {
          block.text = "Awesome sample text! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        }
        blocks.push(block);
      }
    };
  });
