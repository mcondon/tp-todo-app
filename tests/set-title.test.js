import setTitle from '../todos/set-title.js'

export default function testSetTitle(test, assert) {

    test('setTitle', () => {

        test('updates title', () => {
            const todo = { title: 'old title' }
            assert(setTitle(todo, 'new title').title === 'new title', 'should set title')
        })

        test('does not mutate', () => {
            const todo = { title: 'old title' }
            const updatedTodo = setTitle(todo, 'new title')
            assert(todo !== updatedTodo, 'should return new object')
            assert(todo.title === 'old title', 'should not mutate old object')
        })
    })
}