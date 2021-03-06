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
              }, 
          controllerAs: 'vm'
      })
      .state('main.addstory', {
          url: 'add-story/',
          templateUrl: 'app/add-story/add-story.html',
          controller: 'AddStoryController', 
          controllerAs: 'vm'
      })
      .state('main.editstory', {
          url: 'edit-story/',
          templateUrl: 'app/edit-story/edit-story.html',
          controller: 'EditStoryController', 
          controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
