(function (){
	'use strict';
	
	angular
		.module('storyMaker')
		.controller('AddStoryController', AddStoryController);
		
		function AddStoryController(){
			
			var vm = this;
			vm.text = {};
			vm.author = {};
			vm.addStory = addStory;
			
			function addStory(){
				
			}
		}
})();