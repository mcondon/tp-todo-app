function updateTodo(todoList, id, update) {
    return todoList.map(todo => todo.id === id ? update(todo) : todo)
}

export default updateTodo