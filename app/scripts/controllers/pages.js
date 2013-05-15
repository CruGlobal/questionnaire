'use strict';

angular.module('questionnaireApp')
  .controller('PagesCtrl', function (form, $scope) {
    $scope.answers = {};

    $scope.blocks = form.blocks();
  });
