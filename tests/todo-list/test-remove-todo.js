import removeTodo from '/todo-list/remove-todo.js'

function testRemoveTodo(test, assert) {

    test('removeTodo', () => {

        test('removes todo', () => {
            const todo1 = { title: 'test one', id: 1 }
            const todo2 = { title: 'test two', id: 2 }
            const todos = [ todo1, todo2 ]
            const updatedTodos = removeTodo(todos, 1)
            assert(updatedTodos.length === 1, 'should remove todo')
            assert(updatedTodos[0] === todo2, 'should remove todo1')
        })

        test('does not mutate list', () => {
            const todo1 = { title: 'test one', id: 1 }
            const todo2 = { title: 'test two', id: 2 }
            const todos = [ todo1, todo2 ]
            const updatedTodos = removeTodo(todos, 1)
            assert(todos.length === 2, 'should still be list of 2')
            assert(updatedTodos !== todos, 'should not mutate list')
        })
    })
}

export default testRemoveTodo