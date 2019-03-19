function setComplete(todo, complete) {
    return Object.assign(
        {},
        todo,
        { complete }
    )
}

export default setComplete