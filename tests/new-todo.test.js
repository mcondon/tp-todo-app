import newTodo from '../todos/new-todo.js'

export default function testNewTodo(test, assert) {

    test('newTodo', () => {

        test('Should return an object', () => {
            assert(typeof newTodo('test') === 'object', 'expected object')
        })

        test('Should have a title', () => {
            assert(newTodo('test').title === 'test', 'should have a title')
        })

        test('Should have an id', () => {
            assert(typeof newTodo('test').id !== 'undefined', 'should have an id')
        })

        test('Should have a unique id for every item', () => {
            const id1 = newTodo('test').id
            const id2 = newTodo('test').id
            assert(id2 !== id1, 'should have unique ids')
        })

    })

}