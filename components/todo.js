import PropTypes from '/react/prop-types.js'
import React from '/react/react.js'
const h = React.createElement

function Todo({
    id,
    title
}) {
    return h(
        'div',
        { key: id, className: 'todo-list-manager__todo' },
        title
    )
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired
}

export default Todo
