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
        { className: `todo-list-manager__header todo-list-manager__header--${allComplete ? 'complete' : 'incomplete'}` },
        h('h1', { className: 'todo-list-manager__header-title' }, 'todo list' ),
        h(
            'i',
            {
                className: 'icon-check todo-list-manager__toggle-all-todos',
                onClick: toggleAllTodos
            }
        ),
        h(
            TextInput,
            {
                className: 'todo-list-manager__add-todo',
                placeholder: 'add todo',
                onEnter: (e) => (e.target.value.trim() && addTodo(e.target.value.trim()))
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
