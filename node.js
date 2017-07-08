console.log('this is node.js');

const fs = require('fs');

var addNote = (title, body)=>{
    var notes =[];
    var note = {
        title,
        body
    };

    try{
        var notesString = fs.readFileSync('note-date.json');
        notes = JSON.parse(notesString);
    }catch(e){

    }

    var duplicateNote = notes.filter((note)=>title === note.title);
    if(duplicateNote.length ===0){
        notes.push(note);
        fs.writeFileSync('note-date.json', JSON.stringify(notes));
    }
};

var getAll =()=>{
  console.log('Getting all notes');
};

module.exports ={
    addNote,
    getAll
};