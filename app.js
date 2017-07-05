console.log('starting app');

const fs = require('fs');
const os =require('os');
const notes = require('./node.js');

var user = os.userInfo();
console.log(user);

fs.appendFile('greeting.txt', `\nHello, ${user.username}`, function(err){
    if (err){
        console.log('unable to write to file');
    }
});