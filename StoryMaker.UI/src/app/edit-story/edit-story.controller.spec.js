(function () {
	'use strict';
	describe('EditStoryController', function () {
		
		beforeEach(module('storyMaker'));
			
		it("should be defined", inject(function($controller){
			var vm = $controller('EditStoryController');
			
			expect(vm).toBeDefined();
		}));
		
		it("should have a text and an author", inject(function($controller){
			var vm = $controller('EditStoryController');
			
			expect(vm.text).toBeDefined();
			expect(vm.author).toBeDefined();
		}));
		
		it("saveStory() should be defined", inject(function($controller){
			var vm = $controller('EditStoryController');
			
			expect(vm.saveStory).toBeDefined();
		}));

	});
})();