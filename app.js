console.log('starting app');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./node.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command', command);
//console.log('Process', process.argv);
console.log('Yargs', argv);

if (command ==='add'){
    notes.addNote(argv.title, argv.body);
}else if(command ==='list'){
    notes.getAll();
}else if(command === 'read'){

}else if(command === 'remove'){

}else{

}