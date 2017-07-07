/*var obj = {
    name: 'Mark'
};
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);
*/


/*var personString ='{"name": "Mark", "age": 23}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log (person);
*/

const fs = require('fs');
var originalNote = {
    title: 'some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof noteString);
console.log(note.title);