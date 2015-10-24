(function () {
	'use strict';
	describe('EditStoryController', function () {
		
		var $controller, storyService;

		beforeEach(module('storyMaker'));

		beforeEach(inject(function (_$controller_, StoryService) {
			spyOn(StoryService, 'saveStory');
			storyService = StoryService;
			$controller = _$controller_;
		}));
			
		it("should be defined", function(){
			var vm = $controller('EditStoryController');
			
			expect(vm).toBeDefined();
		});
		
		it("should have a text and an author", function(){
			var vm = $controller('EditStoryController');
			
			expect(vm.text).toBeDefined();
			expect(vm.author).toBeDefined();
		});
		
		it("saveStory() should be defined", function(){
			var vm = $controller('EditStoryController');
			
			expect(vm.saveStory).toBeDefined();
		});

	});
})();