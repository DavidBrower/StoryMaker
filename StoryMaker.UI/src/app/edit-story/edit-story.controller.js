(function(){
	'use strict';
	
  angular
    .module('storyMaker')
    .controller('EditStoryController', EditStoryController);
	
	EditStoryController.$inject = ['StoryService'];
	
	function EditStoryController(storyService){
		/* jshint validthis: true */
		var vm = this;
		
		vm.text = {};
		vm.author = {};
		vm.saveStory = saveStory;
		
		function saveStory() {
			storyService.saveStory()
						.then();
		}
	}
	
})();