import toggleAllTodos from '/todo-list/toggle-all-todos.js'

function testToggleAllTodos(test, assert) {

    test('toggleAllTodos', () => {

        test('if any are incomplete, marks all complete', () => {
            const todo1 = { title: 'test one', id: 1, complete: true }
            const todo2 = { title: 'test two', id: 2, complete: false }
            const todos = [ todo1, todo2 ]
            const updatedTodos = toggleAllTodos(todos)
            assert(updatedTodos.every(todo => todo.complete), 'should mark all complete')
        })

        test('if all are complete, marks all incomplete', () => {
            const todo1 = { title: 'test one', id: 1, complete: true }
            const todo2 = { title: 'test two', id: 2, complete: true }
            const todos = [ todo1, todo2 ]
            const updatedTodos = toggleAllTodos(todos)
            assert(updatedTodos.every(todo => !todo.complete), 'should mark all incomplete')
        })
    })
}

export default testToggleAllTodos