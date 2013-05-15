'use strict';

angular.module('questionnaireApp')
  .directive('textQuestion', function () {
    return {
      template: '<input data-ng-model="answer" placeholder="{{block.placeholder}}" data-ng-change="updateAnswer()">',
      link: function postLink(scope) {
        scope.updateAnswer = function() {
          scope.answers[scope.block.name] = scope.answer;
        };
      }
    };
  });
