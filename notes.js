const fs = require('fs');


const getNotes = ()=>('your damn notes...');


const addNotes = (title,body)=>{
   const notes = loadNotes();

   notes.push({
       title:title,
       body:body
   });

   saveNotes(notes);
}


function saveNotes(notes){
    const notesJSON = JSON.stringify(notes);

    fs.writeFileSync('notes.json',notesJSON);
}


function loadNotes(){
    //using a try catch if in case there is not notes.json file already
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
    
} 


module.exports = {
    getNotes:getNotes,
    addNotes:addNotes
}
