console.log('this is node.js');

const fs = require('fs');

//fetchNotes 和 saveNotes的作用是为了reuse code
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

var getNote = (title)=>{
    console.log('Getting note', title);
};

var removeNote =(title)=>{
    var notes = fetchNotes();
    var filterNotes = notes.filter((note)=>note.title!== title);
    saveNotes(filterNotes);

    return notes.length !== filterNotes.length;//用来证明note有没有没删掉
}

module.exports ={
    addNote,
    getAll,
    getNote,
    removeNote
};