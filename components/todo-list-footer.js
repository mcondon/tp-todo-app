import PropTypes from '/react/prop-types.js'
import React from '/react/react.js'

import {
    FILTER_TODOS_ALL,
    FILTER_TODOS_COMPLETE,
    FILTER_TODOS_INCOMPLETE
} from '/todo-list-redux/constants.js'

const h = React.createElement

function TodoListFooter({

    filter,
    incompleteCount,
    totalCount,

    filterTodosAll,
    filterTodosComplete,
    filterTodosIncomplete

}) {

    return h(
        'div',
        { className: 'todo-list-manager__footer' },
        h(
            'div',
            { className: 'todo-list-manager__counter' },
            `${incompleteCount} / ${totalCount} remaining`
        ),
        h(
            'button',
            {
                className: `todo-list-manager__filter ${filter === FILTER_TODOS_ALL ? 'todo-list-manager__filter--selected' : ''} todo-list-manager__filter--all`,
                onClick: filterTodosAll
            },
            'All'
        ),
        h(
            'button',
            {
                className: `todo-list-manager__filter ${filter === FILTER_TODOS_COMPLETE ? 'todo-list-manager__filter--selected' : ''} todo-list-manager__filter--complete`,
                onClick: filterTodosComplete
            },
            'Complete'
        ),
        h(
            'button',
            {
                className: `todo-list-manager__filter ${filter === FILTER_TODOS_INCOMPLETE ? 'todo-list-manager__filter--selected' : ''} todo-list-manager__filter--incomplete`,
                onClick: filterTodosIncomplete
            },
            'Incomplete'
        )
    )
}

TodoListFooter.propTypes = {

    filter: PropTypes.string.isRequired,
    incompleteCount: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,

    filterTodosAll: PropTypes.func.isRequired,
    filterTodosComplete: PropTypes.func.isRequired,
    filterTodosIncomplete: PropTypes.func.isRequired
}

export default TodoListFooter
