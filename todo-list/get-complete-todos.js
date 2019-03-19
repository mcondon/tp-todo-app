function getCompleteTodos(todoList) {
    return todoList.filter(todo => todo.complete)
}

export default getCompleteTodos