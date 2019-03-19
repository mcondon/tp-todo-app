import getCompleteTodos from '/todo-list/get-complete-todos.js'

function testGetCompleteTodos(test, assert) {

    test('getCompleteTodos', () => {

        test('returns complete todos', () => {
            const todo1 = { title: 'test one', id: 1, complete: false }
            const todo2 = { title: 'test two', id: 2, complete: true }
            const todos = [ todo1, todo2 ]
            const completeTodos = getCompleteTodos(todos)
            assert(completeTodos.length === 1, 'should return 1 todo')
            assert(completeTodos[0].complete === true && completeTodos[0].id === 2, 'should return only complete todos')
        })
    })
}

export default testGetCompleteTodos