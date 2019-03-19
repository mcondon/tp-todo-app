import PropTypes from '/react/prop-types.js'
import React from '/react/react.js'
import Todo from './todo.js'
import TextInput from './text-input.js'

const h = React.createElement

function TodoListManager({
    filteredTodos,
    addTodo,
    removeTodo,
    editTodo,
    cancelEditTodo,
    updateTodoTitle,
    currentlyEditingId
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
        filteredTodos.map(todo => {
            return h(
                Todo,
                {
                    key: todo.id,
                    todo,
                    editing: todo.id === currentlyEditingId,
                    removeTodo,
                    editTodo,
                    cancelEditTodo,
                    updateTodoTitle
                }
            )
        })
    )
}

TodoListManager.propTypes = {
    filteredTodos: PropTypes.array.isRequired,
    currentlyEditingId: PropTypes.string,

    addTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    cancelEditTodo: PropTypes.func.isRequired,
    updateTodoTitle: PropTypes.func.isRequired
}

export default TodoListManager
