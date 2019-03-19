import PropTypes from '/react/prop-types.js'
import React from '/react/react.js'
import Todo from './todo.js'
import TextInput from './text-input.js'

const h = React.createElement

function TodoListManager({
    filteredTodos,
    addTodo,
    removeTodo
}) {
    return h(
        'div',
        { className: 'todo-list-manager' },
        h(
          TextInput,
          {
              className: 'todo-list-manager__add-todo',
              onEnter: (e) => addTodo(e.target.value.trim())
          }
        ),
        filteredTodos.map(todo => h(Todo, { key: todo.id, todo, removeTodo }))
    )
}

TodoListManager.propTypes = {
    filteredTodos: PropTypes.array.isRequired,

    addTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired
}

export default TodoListManager
