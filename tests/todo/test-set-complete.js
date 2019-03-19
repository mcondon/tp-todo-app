import setComplete from '/todo/set-complete.js'

export default function testSetComplete(test, assert) {

    test('setComplete', () => {

        test('updates complete', () => {
            const todo = { complete: false }
            assert(setComplete(todo, true).complete === true, 'expected complete === true')
        })

        test('does not mutate', () => {
            const todo = { complete: false }
            const updatedTodo = setComplete(todo, true)
            assert(todo !== updatedTodo, 'should return new object')
            assert(todo.complete === false, 'should not mutate old object')
        })
    })
}