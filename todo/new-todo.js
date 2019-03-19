let id = 1

function newTodo(title) {
    return { title, id: +new Date() + id++, complete: false }
}

export default newTodo