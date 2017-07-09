console.log('starting app');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./node.js');

const argv = yargs
    .command('add', 'add a new note', {
        title:{
            describe: 'title of note',
            demand: true,
            alias: 't'
        }
    })
    .help()
    .argv;
var command = argv._[0];
console.log('Command', command);
//console.log('Process', process.argv);
console.log('Yargs', argv);

if (command ==='add'){

    var note = notes.addNote(argv.title, argv.body);

}else if(command ==='list'){

    var note = notes.getAll();
    console.log(`print, ${note.length} note(s)`);
    note.forEach((a)=>notes.logNote(a));

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
    console.log('command cannot be recognized');
};