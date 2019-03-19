import PropTypes from '/react/prop-types.js'
import React from '/react/react.js'
import TextInput from './text-input.js'
const h = React.createElement

function Todo({
    todo,
    editing,
    removeTodo,
    editTodo,
    cancelEditTodo,
    updateTodoTitle
}) {
    const { id, title } = todo
    return h(
        'div',
        { className: 'todo-list-manager__todo' },
        editing ?
            h(TextInput, { focused: true, value: todo.title, onEscape: () => cancelEditTodo(id), onEnter: (e) => updateTodoTitle(id, e.target.value) }) :
            h('div', { onDoubleClick: () => editTodo(id), }, title),
        h('div', { onClick: () => removeTodo(id) }, 'X')
    )
}

Todo.propTypes = {
    editing: PropTypes.bool.isRequired,
    todo: PropTypes.object.isRequired,
    removeTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    cancelEditTodo: PropTypes.func.isRequired,
    updateTodoTitle: PropTypes.func.isRequired
}

export default Todo
