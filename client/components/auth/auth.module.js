'use strict';

angular.module('raincubeHerokuApp.auth', [
  'raincubeHerokuApp.constants',
  'raincubeHerokuApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
