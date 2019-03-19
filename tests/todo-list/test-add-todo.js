import addTodo from '/todo-list/add-todo.js'

function testAddTodo(test, assert) {

    test('addTodo', () => {

        test('appends to end of list', () => {
            const todo = { title: 'test', id: 1 }
            const todos = []
            const updatedTodos = addTodo(todos, todo)
            assert(updatedTodos[0] === todo, 'should append to end')
        })

        test('does not mutate list', () => {
            const todo = { title: 'test', id: 1 }
            const todos = []
            const updatedTodos = addTodo(todos, todo)
            assert(todos.length === 0, 'should still be empty list')
            assert(updatedTodos !== todos, 'should not mutate')
        })
    })
}

export default testAddTodo