import newTodoTests from './new-todo.test.js'

const stack = []

const red = (msg) => console.log('\x1b[31m', msg, '\x1b[0m')
const green = (msg) => console.log('\x1b[32m', msg, '\x1b[0m')

function test(title, fn) {
    stack.push({ title, fn })
}

function assert(condition, msg) {
    if(!condition) {
        throw new Error(msg)
    }
}

function runTests() {
    let passed = 0
    let failed = 0

    while(stack.length) {
        let { title, fn } = stack.shift()
        try {
            fn()
            passed++
            green(`${title}: PASS`)
        } catch(e) {
            red(`${title}: FAIL`)
            failed++
        }
    }

    console.log(`PASSED: ${passed}, FAILED: ${failed} `)
}

newTodoTests(test, assert)

runTests()