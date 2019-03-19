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
    updateTodoTitle,
    setTodoComplete,
    setTodoIncomplete
}) {
    const { id, title } = todo
    return h(
        'div',
        { className: `todo-list-manager__todo todo-list-manager__todo--${todo.complete ? 'complete' : 'incomplete'}` },
        h(
            'i',
            {
                className: 'icon-check todo-list-manager__todo-toggle',
                onClick: todo.complete ? () => setTodoIncomplete(id) : () => setTodoComplete(id)
            }
        ),
        editing ?
            h(
                TextInput,
                {
                    className: 'todo-list-manager__todo-edit',
                    focused: true,
                    value: todo.title,
                    onEscape: () => cancelEditTodo(id),
                    onEnter: (e) => e.target.value.trim() ? updateTodoTitle(id, e.target.value.trim()) : removeTodo(id)
                }
            ) :
            h(
                'div',
                { className: 'todo-list-manager__todo-view', onDoubleClick: todo.complete ? undefined : () => editTodo(id), },
                title
            ),
        h(
            'div',
            {
                className: 'icon-delete todo-list-manager__todo-delete',
                onClick: () => removeTodo(id)
            }
        )
    )
}

Todo.propTypes = {
    editing: PropTypes.bool.isRequired,
    todo: PropTypes.object.isRequired,
    removeTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    cancelEditTodo: PropTypes.func.isRequired,
    updateTodoTitle: PropTypes.func.isRequired,
    setTodoComplete: PropTypes.func.isRequired,
    setTodoIncomplete: PropTypes.func.isRequired
}

export default Todo
