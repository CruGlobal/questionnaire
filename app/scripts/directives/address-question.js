'use strict';

angular.module('questionnaireApp')
  .directive('addressQuestion', function () {
    return {
      templateUrl: 'views/address-form.html',
      link: function postLink(scope, element, attrs) {
        scope.updateAnswer = function() {
          scope.answers[scope.block.name] = {
            'line1': scope.line1,
            'line2': scope.line2,
            'city': scope.city,
            'state': scope.state,
            'zip': scope.zip
          };
        }
      }
    };
  });
