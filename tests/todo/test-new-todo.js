import newTodo from '/todo/new-todo.js'

export default function testNewTodo(test, assert) {

    test('newTodo', () => {

        test('Should return an object', () => {
            assert(typeof newTodo('test') === 'object', 'expected object')
        })

        test('Should have a title', () => {
            assert(newTodo('test').title === 'test', 'expected title === test')
        })

        test('Should have an id', () => {
            assert(typeof newTodo('test').id !== 'undefined', 'expected id')
        })

        test('Should have a complete flag', () => {
            assert(newTodo('test').complete === false, 'expected complete === false')
        })

        test('Should have a unique id for every item', () => {
            const id1 = newTodo('test').id
            const id2 = newTodo('test').id
            assert(id2 !== id1, 'should have unique ids')
        })

    })

}