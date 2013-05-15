'use strict';

angular.module('questionnaireApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/pages', {
        templateUrl: 'views/pages.html',
        controller: 'PagesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
