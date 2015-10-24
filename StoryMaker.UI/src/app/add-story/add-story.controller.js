(function (){
	'use strict';
	
	angular
		.module('storyMaker')
		.controller('AddStoryController', AddStoryController);
		
		AddStoryController.$inject = ['StoryService'];
			
		function AddStoryController(storyService){
			
			var vm = this;
			vm.text = {};
			vm.author = {};
			vm.project = {};
			vm.addStory = addStory;
			
			function addStory(){
				storyService.addStory()
							.then();
			}
		}
})();