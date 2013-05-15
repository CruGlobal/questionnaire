'use strict';

angular.module('questionnaireApp')
  .directive('yesNoQuestion', function () {
    return {
      template: '<input type="checkbox" data-ng-model="answer" data-ng-change="updateAnswer()">',
      link: function postLink(scope) {
        scope.updateAnswer = function() {
          scope.answers[scope.block.name] = scope.answer;
        };
      }
    };
  });
