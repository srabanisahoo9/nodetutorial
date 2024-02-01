//in commonjs every file is a module (by default)
//modules-encapsulated code(only share minimum)
//local
const secret = 'super secret'
//share
const john = `john`
const peter = 'peter'

//console.log('sinu')
module.exports={john, peter}