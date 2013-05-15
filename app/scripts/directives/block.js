'use strict';

angular.module('questionnaireApp')
  .directive('block', function () {
    return {
      template: '<div data-ng-include="\'views/blocks/\' + block.blockType + \'.html\'"></div>'
    };
  });
