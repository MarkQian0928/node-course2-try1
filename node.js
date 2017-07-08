//console.log('this is node.js');

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
    return fetchNotes();
};

var getNote = (title)=>{
    var  notes = fetchNotes();
    var filterNotes=notes.filter((a)=>a.title ===title);
    return filterNotes[0];
};

var removeNote =(title)=>{
    var notes = fetchNotes();
    var filterNotes = notes.filter((note)=>note.title!== title);
    saveNotes(filterNotes);

    return notes.length !== filterNotes.length;//用来证明note有没有没删掉
}

var logNote = (note)=>{
    console.log('--');
    console.log(`title: ${note.title}`);
    console.log(`body: ${note.body}`);
}

module.exports ={
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};