function removeTodo(todoList, id) {
    return todoList.filter(todo => todo.id !== id)
}

export default removeTodo