import updateTodo from '/todo-list/update-todo.js'
import setTitle from '/todo/set-title.js'

function testUpdateTodo(test, assert) {

    test('updateTodo', () => {

        test('updates todo', () => {
            const todo1 = { title: 'test one', id: 1 }
            const todo2 = { title: 'test two', id: 2 }
            const todos = [ todo1, todo2 ]
            const updatedTodos = updateTodo(todos, 1, (todo) => setTitle(todo, 'test one updated'))
            assert(updatedTodos[0].title === 'test one updated', 'should update title')
        })

        test('does not mutate list', () => {
            const todo1 = { title: 'test one', id: 1 }
            const todo2 = { title: 'test two', id: 2 }
            const todos = [ todo1, todo2 ]
            const updatedTodos = updateTodo(todos, 1, (todo) => setTitle(todo, 'test one updated'))
            assert(todos.length === 2, 'should still be list of 2')
            assert(updatedTodos !== todos, 'should not mutate list')
            assert(updatedTodos[0] !== todos[0], 'should not mutate object')
        })
    })
}

export default testUpdateTodo