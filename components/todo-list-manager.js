import PropTypes from '/react/prop-types.js'
import React from '/react/react.js'
import TodoListHeader from './todo-list-header.js'
import TodoListFooter from './todo-list-footer.js'
import Todo from './todo.js'

const h = React.createElement

function TodoListManager({

    filter,
    filteredTodos,
    currentlyEditingId,
    incompleteCount,
    totalCount,

    addTodo,
    removeTodo,
    editTodo,
    cancelEditTodo,
    updateTodoTitle,

    setTodoComplete,
    setTodoIncomplete,
    toggleAllTodos,

    filterTodosAll,
    filterTodosComplete,
    filterTodosIncomplete

}) {
    return h(
        'div',
        { className: 'todo-list-manager' },
        h(
            TodoListHeader,
            {
                addTodo,
                toggleAllTodos,
                allComplete: totalCount > 0 && incompleteCount === 0
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
                    updateTodoTitle,
                    setTodoComplete,
                    setTodoIncomplete
                }
            )
        }),
        h(
            TodoListFooter,
            {
                filter,
                incompleteCount,
                totalCount,
                filterTodosAll,
                filterTodosComplete,
                filterTodosIncomplete
            }
        )
    )
}

TodoListManager.propTypes = {

    filter: PropTypes.string.isRequired,
    filteredTodos: PropTypes.array.isRequired,
    incompleteCount: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
    currentlyEditingId: PropTypes.string,

    addTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    cancelEditTodo: PropTypes.func.isRequired,
    updateTodoTitle: PropTypes.func.isRequired,

    setTodoComplete: PropTypes.func.isRequired,
    setTodoIncomplete: PropTypes.func.isRequired,
    toggleAllTodos: PropTypes.func.isRequired,

    filterTodosAll: PropTypes.func.isRequired,
    filterTodosComplete: PropTypes.func.isRequired,
    filterTodosIncomplete: PropTypes.func.isRequired
}

export default TodoListManager
