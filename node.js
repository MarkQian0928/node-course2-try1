console.log('this is node.js');

const fs = require('fs');

var fetchNotes=()=>{
    try{
        var notesString = fs.readFileSync('note-date.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
};

var saveNotes=(notes)=>{
    fs.writeFileSync('note-date.json', JSON.stringify(notes));
};

var addNote = (title, body)=>{
    var notes =fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNote = notes.filter((note)=>title === note.title);

    if(duplicateNote.length ===0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll =()=>{
  console.log('Getting all notes');
};

module.exports ={
    addNote,
    getAll
};