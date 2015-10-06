(function(){
	'use strict';
	
  angular
    .module('storyMaker')
    .controller('EditStoryController', EditStoryController);
	
	function EditStoryController(){
		/* jshint validthis: true */
		var vm = this;
		
		vm.text = {};
		vm.author = {};
		vm.saveStory = saveStory;
		
		function saveStory() {
			
		}
	}
	
})();