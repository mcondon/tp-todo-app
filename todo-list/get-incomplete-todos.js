function getInompleteTodos(todoList) {
    return todoList.filter(todo => !todo.complete)
}

export default getInompleteTodos