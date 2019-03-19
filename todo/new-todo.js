let id = 1

function newTodo(title) {
    return { title, id: `${+new Date()}__${id++}`, complete: false }
}

export default newTodo