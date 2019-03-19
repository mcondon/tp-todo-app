const stack = []
let passed = 0
let failed = 0

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

function run() {
    while(stack.length) {
        let { title, fn } = stack.shift()
        try {
            fn()
            passed++
            green(`${title}: PASS`)
        } catch(e) {
            red(`${title}: FAIL`)
            console.log(e.message)
            failed++
        }
    }
}

function report() {
    console.log(`\nPASSED: ${passed}, FAILED: ${failed}`)
}

let timeoutId

export default function (fn) {
    console.log('\n')
    fn(test, assert)
    run()
    clearTimeout(timeoutId)
    timeoutId = setTimeout(report, 1)
}
