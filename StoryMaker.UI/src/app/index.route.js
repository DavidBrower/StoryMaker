(function() {
  'use strict';

  angular
    .module('storyMaker')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: function($scope){
                $scope.items = ["A", "List", "Of", "Items"];
              }
      })
      .state('addstory', {
        url: '/add-story',
        templateURL: 'app/add-story/add-story.html', 
        controller: 'AddStoryController'
      })
      .state('editstory', {
        url: '/edit-story',
        templateURL: 'app/edit-story/edit-story.html', 
        controller: function($scope){
                $scope.items = ["A", "List", "Of", "Items"];
              }
      });

    $urlRouterProvider.otherwise('/');
  }

})();
