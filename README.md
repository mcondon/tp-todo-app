

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

## To Do

- UI
    - build all UI components
- build app
- UI
    - make it look good
- review requirements