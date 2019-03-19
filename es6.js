const { fork } = require('child_process')
const env = {
    NODE_OPTIONS: '--experimental-modules --loader ./module-loader.mjs',
    NODE_ENV: process.env.NODE_ENV || 'development',
    os: process.env.os
}
const script = process.argv[2]
const args = process.argv.slice(3)
let childProcess = fork(script, args, { env })
childProcess.on('close', (code) => process.exit(code))