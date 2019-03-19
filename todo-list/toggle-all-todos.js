import setComplete from '../todo/set-complete.js'

function toggleAllTodos(todoList) {

    const toggle = todoList.find(todo => !todo.complete) ?
        todo => setComplete(todo, true) :
        todo => setComplete(todo, false)

    return todoList.map(toggle)
}

export default toggleAllTodos