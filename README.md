

# TP Todo App

This is my attempt to implement the project I'm assigning people for a skill assessment. See [instructions.md] for project instructions

## Notes

- haven't created a react app from scratch in some time
- have never had good success with `create-react-app`, but will try it again
- also haven't used redux beyond any tutorials or very small learning projects

## Timeline / Monologue

- started 2019-03-18 18:55
- 19:20
    - had used create-react-app, plus a quick tutorial online, to create a react redux app hello world
    - tried to start it with `npm start`, babel-jest version error
    - tried reinstalling all the node_modules, didn't help
    - have sworn off `create-react-app`, like I have so many times before
    - using CDN scripts instead
    - and no JSX
    - and no CSS modules
- 19:35
    - thought I was good to go, just using react from cdn, but forgot I needed a UMD version
    - stupid React should just give us a damn ES6 module
- 19:48
    - back in action for real now
    - hello world app works
    - github repo created
- 19:51
    - using global jest cli test runner, in the spirit of keeping this project npm free, just because I can
    - set up a sample test to verify test runner works
- 20:01
    - tried to do some simple TDD for my reducers, but realized I need babel
    - Rant: Babel should be optional!
    - Rant: Jest is slow, and `jest --watch` hangs
- 20:20
    - Rant: why isn't there yet a simple node.js test runner that runs es6 modules from src without babel?
    - Probably should not write my own test runner, but wrote simplest possible runner anyway
    - back to TDD. got `newTodo` function tested
- 20:26
    - Rant: now VSCode is stupid slow for no reason. restart it. I should just only use vim.
- 21:11
    - Completed reasonably well tested data manipulation functions that I will use in my reducers
- 22:20
    - Forgot how not fun Redux boilerplate is. Got a basic input + display working
- 22:47
    - add, edit, delete working
    - next up: toggle one, toggle all, filter - should be very quick
    - stopping for the night, total time so far 4 hours
    - took longer so far than I thought it might, partly because it's been a while since I did any redux
    - something like this is where some code generation and boilerplate reduction would help
    - probably also need some unit tests / more function extraction on the reducer
- 2019-03-19 06:00 started again
- 06:43
    - finished toggle one, toggle all, count, filter
    - Rant: forgot how many layers of boilerplate, and how many layers of potential small errors
- 07:05
    - added local storage middleware, and get initial state from local storage
## To Do
- delete if empty
- UI
    - icons: minimal icon set
    - fonts, colors
    - styles
    - simple flat theme
    - css vars
    - css
    - delete only on hover
    - complete checkbox and strikethrough
    - icons
- time expectations

## Potential Refactoring
- compose reducers
- use reselect for some of the derived props
- make some of the editor functions more functional
    `updateTodos(todos, id, setComplete(false))` instead of `updateTodos(todos, id, todo => setComplete(todo, false))`