const npck = require('./npck')
const vm = require('vm')
const { writeFileSync } = require('fs')

const jsBundle = npck(process.argv[2])
vm.runInThisContext(jsBundle)

writeFileSync(process.cwd() + '/dist/npck.js', jsBundle)
