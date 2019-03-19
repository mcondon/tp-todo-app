let id = 1

function newTodo(title) {
    return { title, id: +new Date() + id++ }
}

export default newTodo