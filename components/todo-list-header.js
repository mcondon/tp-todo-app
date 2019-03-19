import PropTypes from '/react/prop-types.js'
import React from '/react/react.js'
import TextInput from './text-input.js'

const h = React.createElement

function TodoListHeader({

    addTodo,
    toggleAllTodos,
    allComplete

}) {
    return h(
        'div',
        { className: 'todo-list-manager__header' },
        h(
          'i',
          {
              className: 'todo-list-manager__toggle-all-todos',
              onClick: toggleAllTodos
          },
          allComplete ? 'O' : 'X'
        ),
        h(
          TextInput,
          {
              className: 'todo-list-manager__add-todo',
              onEnter: (e) => addTodo(e.target.value.trim())
          }
        )
    )
}

TodoListHeader.propTypes = {
    addTodo: PropTypes.func.isRequired,
    toggleAllTodos: PropTypes.func.isRequired,
    allComplete: PropTypes.bool.isRequired
}

export default TodoListHeader
