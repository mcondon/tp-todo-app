# Front End Skill Assessment

As we prepare for our upcoming athlete funnel projects, I would like to gain a better understanding of our technical skill level. Most of our recent work has either not involved building UI components and applications from scratch, or it has been so encumbered by technical debt or organizational debt, that it is hard to guage our true technical potential.

So, I created this simple challenge, based on TodoMVC, with a few constraints. 

## Instructions

- Familiarize yourself with all of the details in the 'familiarization' section
- Within the next 2 weeks, attempt to build a Todo app that meets the user requirements and technical constraints below
- After your initial familiarization, once you start actually setting up your environment and building the app, keep track of the time you spend. Try to be reasonably accurate with this time assessment, as this will help me gauge how difficult this challenge was for you.
- Timebox your efforts - this project should take only a few hours total, after you've read the specs and reviewed the technologies involved

## Familiarization

- Review the functionality of the TodoMVC.com example: http://todomvc.com/examples/react
- Review the Functional Acceptance Criteria
- Review the UI Acceptance Criteria
- Review the Technical Acceptance Criteria
- Review any of the libraries / methodologies if you're not already familiar with them

## Functional Acceptance Criteria

- create todos
    - app should display a text input field and a list of todos
    - todos are listed in the order created
    - typing into the text input field and hitting enter should create a new todo
    - should not create a new todo if input is empty or whitespace
- delete todo
    - hovering over a todo should display a delete icon
    - clicking on the delete icon should delete the todo
- complete todo
    - each todo should have a checkbox icon
    - clicking on the checkbox icon should toggle completion state on or off
    - completed todos should display a checked checkbox, and strikethrough text
    - uncompleted todos should display an unchecked checkbox, and normal text
- edit todo
    - double-clicking on a todo should display an editable text field
    - typing in the text field and hitting enter should update the todo text
    - removing all of the text, or typing only whitespace, and hitting enter, should delete the todo
    - hitting the escape key should cancel the edits
- toggle all todos
    - header should contain an icon to toggle all todos
    - clicking on the icon, if one or more todos are incomplete, should mark them all complete
    - click on the icon, if all todos are complete, should mark them all incomplete
- incomplete count
    - app should display an 'x items remaining' count of incomplete todos
- clear completed todos
    - app should have a 'clear completed' button
    - clicking the 'clear completed' button should delete completed todos
- filter todos
    - app should have three filter options: all, active, complete
    - selecting 'all' should display all todos
    - selecting 'active' should display only incomplete todos
    - selecting 'complete' should display only complete todos
- remember state
    - when I refresh the browser, the app should remember my list of todos, the completion status of each todo, and the selected filter option

## UI Acceptance Criteria
- UI should be acceptably clean, but do not spend much effort on design
- App does not need to exactly match the TodoMVC styles

## Technical Acceptance Criteria

**Project Setup**
- Must start from a blank project
- May use any preferred starter kit or boilerplate
- Should use some type of sandbox to build UI components
- Use github or other git repo

**React**
- Must use React
- Must use PropTypes and default props
- May use JSX
- May use router or not (todomvc uses router for filters - optional)

**Redux**
- Must thoroughly unit test reducers
- Must use plain JS objects for redux state and reducers
- Must not mutate objects in reducers

**CSS**
- Must use CSS variables for color and font styles
- Must not use an existing CSS framework
- Must use BEM naming for CSS