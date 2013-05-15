'use strict';

angular.module('questionnaireApp')
  .controller('PagesCtrl', function (form, $scope) {
    $scope.answers = {};

    $scope.blocks = form.blocks();

    $scope.blockTypes = [
      {
        'label':'Line Break',
        'value':'line'
      },
      {
        'label':'Paragraph of Text',
        'value':'paragraph'
      },
      {
        'label':'Text Question',
        'value':'textQuestion'
      },
      {
        'label':'Address Input',
        'value':'addressQuestion'
      }
    ];

    $scope.addNewBlock = function(type) {
      form.addBlock({
        'blockType': type
      });
    };
  });
