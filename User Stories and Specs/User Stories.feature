Feature: Create a project

		As the product owner
		I can create a new project 
		To store stories and specs that belong together
		
		Scenario: Creates Successfully
		
		Given that a project with the name NewProject doesn't existing
		When I create a project named NewProject
		Then I will be informed that a project named NewProject has been created
		
Feature: Create a user story

		As the product owner
		I can create a new user story
		So that it can be submitted for approval
		
		Scenario: Creates successfully
			
			Given that I have entered the text of a user story
			And I have specified the project
			When I save that user story
			Then it will be available to submit for review
		
Feature: Submit user story

		As the product owner
		I can submit a user story for review
		So that other stakeholders can comment on it
		
		Scenario: Submits successfully
		
		Given that I have created a user story
		When I submit that story for review
		Then the status of that story will be "submitted"
		
		
Feature: Edit an existing user story
Feature: Comment on a user story
Feature: Create pull request for user story
Feature: Approve user story
Feature: Reject user story
Feature: Write a Gherkin spec
Feature: Submit Gherkin spec
Feature: Edit an existing Gherkin spec
Feature: Comment on a Gherkin spec
Feature: View user stories by status
Feature: View Gherkin specs by status
Feature: 
