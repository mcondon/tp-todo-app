import test from './test-runner.js'
import testNewTodo from './todo/test-new-todo.js'
import testSetTitle from './todo/test-set-title.js'
import testSetComplete from './todo/test-set-complete.js'
import testAddTodo from './todo-list/test-add-todo.js'
import testUpdateTodo from './todo-list/test-update-todo.js'
import testRemoveTodo from './todo-list/test-remove-todo.js'
import testGetCompleteTodos from './todo-list/test-get-complete-todos.js'
import testGetIncompleteTodos from './todo-list/test-get-incomplete-todos.js'
import testToggleAllTodos from './todo-list/test-toggle-all-todos.js'

test(testNewTodo)
test(testSetTitle)
test(testSetComplete)
test(testAddTodo)
test(testUpdateTodo)
test(testRemoveTodo)
test(testGetCompleteTodos)
test(testGetIncompleteTodos)
test(testToggleAllTodos)