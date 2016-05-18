'use strict';

angular.module('raincubeHerokuApp', [
  'raincubeHerokuApp.auth',
  'raincubeHerokuApp.admin',
  'raincubeHerokuApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
