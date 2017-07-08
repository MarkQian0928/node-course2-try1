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
    var note = notes.addNote(argv.title, argv.body);
}else if(command ==='list'){
    notes.getAll();
}else if(command === 'read'){
    var note = notes.getNote(argv.title);
    if (note){//if note is not undefined
        console.log("read success");
        notes.logNote(note);
    }else{
        console.log("note not found");
    }
}else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'note has removed' : 'note not found';
    console.log (message);
}else{

}