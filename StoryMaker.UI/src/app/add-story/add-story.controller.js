(function (){
	'use strict';
	
	angular
		.module('storyMaker')
		.controller('AddStoryController', AddStoryController);
		
		AddStoryController.$inject = ['StoryService'];
			
		function AddStoryController(storyService){
			
			var vm = this;
			vm.story.text = {};
			vm.story.author = {};
			vm.story.project = {};
			vm.story.status = 'New';
			
			vm.addStory = addStory;
			vm.reset = reset;
			
			function addStory(newStory){
				storyService.addStory(newStory)
							.then();
			}
			
			function reset(){
				vm.story.text = '';
			}
		}
})();