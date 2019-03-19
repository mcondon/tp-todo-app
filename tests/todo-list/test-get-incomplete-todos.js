import getIncompleteTodos from '/todo-list/get-incomplete-todos.js'

function testGetIncompleteTodos(test, assert) {

    test('getIncompleteTodos', () => {

        test('returns incomplete todos', () => {
            const todo1 = { title: 'test one', id: 1, complete: false }
            const todo2 = { title: 'test two', id: 2, complete: true }
            const todos = [ todo1, todo2 ]
            const incompleteTodos = getIncompleteTodos(todos)
            assert(incompleteTodos.length === 1, 'should return 1 todo')
            assert(incompleteTodos[0].complete === false && incompleteTodos[0].id === 1, 'should return only incomplete todos')
        })
    })
}

export default testGetIncompleteTodos