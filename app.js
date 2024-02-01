
//const hithere = (name)=>{
//    console.log('hello there ${name}')
//}
//
//hithere('susan')
//hithere(john)
//hithere(peter)

//const os = require('os')

//info about current user
//const user = os.userInfo()
//console.log(user)
//
////method returns the system uptime in seconds
//console.log(`the system uptime is ${os.uptime()} seconds`)

//const currentOS = {
//    name:os.type(),
//    release:os.release(),
//    totalMem:os.totalmem(),
//    freeMem:os.freemem(),
//}
//console.log(currentOS)

//console.log(path.sep)

//const filePath = path.join('/content','subfolder','test')
//console.log(filePath)
//
//const base = path.basename(filePath)
//console.log(base)
//
//const absolute = path.resolve(__dirname, 'cont', 'subfolder', 'test.txt');
//console.log(absolute)
//const fs = require('fs');
//
//// Asynchronous file reading with callback
//fs.readFileSync('example.txt', 'utf8', (err, data) => {
//    if (err) {
//        console.error(err);
//        return;
//    }
//    console.log(data);
//});
//
//console.log('File reading initiated.');

const _ = require('lodash')

const items = [1, [2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)

