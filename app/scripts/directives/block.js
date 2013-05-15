'use strict';

angular.module('questionnaireApp')
  .directive('block', function () {
    return {
      template: '<div class="span8 offset2" data-ng-show="show" >' +
        '<div data-ng-include="\'views/blocks/\' + block.blockType + \'.html\'"></div>' +
        '</div>',
      link: function(scope) {
        var show = scope.block.show;
        if(!angular.isUndefined(show)) {
          scope.show = scope.answers[show];
        } else {
          scope.show = true;
        }
        scope.$watch('answers.'+show, function(newValue) {
          if(!angular.isUndefined(newValue)) {
            scope.show = newValue;
          }
        });
      }
    };
  });
