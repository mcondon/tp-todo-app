import PropTypes from '/react/prop-types.js'
import React from '/react/react.js'
const h = React.createElement

function Todo({
    todo,
    removeTodo
}) {
    const { id, title } = todo
    return h(
        'div',
        { className: 'todo-list-manager__todo' },
        title,
        h('div', { onClick: () => removeTodo(id) }, 'X')
    )
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default Todo
