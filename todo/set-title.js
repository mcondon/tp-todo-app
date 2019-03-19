function setTitle(todo, title) {
    return Object.assign(
        {},
        todo,
        { title }
    )
}

export default setTitle