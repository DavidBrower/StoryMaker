(function () {
	'use strict';
	describe('EditStoryController', function () {

		var $controller;

		beforeEach(module('storyMaker'));

		beforeEach(inject(function (_$controller_) {
			$controller = _$controller_;
		}));

		it("should be defined", function () {
			var vm = $controller('AddStoryController');

			expect(vm).toBeDefined();
		});

		it("should have a text, an author, and a project", function () {
			var vm = $controller('AddStoryController');

			expect(vm.text).toBeDefined();
			expect(vm.author).toBeDefined();
			expect(vm.project).toBeDefined();
		});

		it("addStory() should be defined", function () {
			var vm = $controller('AddStoryController');

			expect(vm.addStory).toBeDefined();
		});

		xit("should add a story", function ($controller) {
			var vm = $controller('AddStoryController');

			vm.project = "StoryMaker";
			vm.author = "David Brower";
			vm.text =   "As a user " +
						"I can write some terrific user stories " +
						"So that the Lids have some work";
						
			//vm.addStory();
			
			expect(vm.methodName).toHaveBeenCalledWith(vm.author, vm.text);
		});
	});
})();