(function (){
	'use strict';
	
	angular
		.module('storyMaker')
		.factory('StoryService', storyService);

function storyService() {
	return {
		addStory: addStory,
		saveStory: saveStory, 
		deleteStory: deleteStory
	};
	
	function addStory(){
		
	}
	
	function saveStory(){
		
	}
	
	function deleteStory(){
		
	}
 }
})();