const fs = require('fs');
const {Howl} = require('howler');
const chalk = require('chalk');

const log = console.log;

const getNotes = ()=>('your damn notes...');


const addNotes = (title,body)=>{
   const notes = loadNotes();
   const duplicateNote = notes.find(el=>{
       notes.title === title;
   });

   if(!duplicateNote){
    notes.push({
        title:title,
        body:body
    });
    errorAudio();
    log(chalk.green.inverse('notes added'));
   }else{
       
    log(chalk.red.inverse('note already exixts!'));
      
   }

  
   saveNotes(notes);
};

const removeNotes = (title)=>{

    const notes = loadNotes();

    
  
     //filtering notes to remove the note required
    const notesToKeep = notes.filter(note=>note.title !== title);
     
    
    
    if(notesToKeep.length !== notes.length){ //or you can check if notes.length > notesToKeep.length
     saveNotes(notesToKeep);
     log(chalk.green.inverse('note removed successfully'));
    }else{
     log(chalk.red.inverse('no note found!'))
    }
};

const listNotes= () =>{
    const notes = loadNotes();
    log(chalk.magentaBright(`Your Notes`));

    notes.forEach(note=>log(chalk.italic.inverse.yellow(note.title)));
}

const readNote = (title)=>{
    const notes = loadNotes();

    const noteToRead = notes.find(note=>note.title === title);

    if(noteToRead){
        log(chalk.inverse.cyan(noteToRead.title) +" : "+noteToRead.body );
    }else{
        log(chalk.red.inverse('No such note'));
    }
}

function saveNotes(notes){
    const notesJSON = JSON.stringify(notes);

    fs.writeFileSync('notes.json',notesJSON);
};


function loadNotes(){
    //using a try catch if in case there is not notes.json file already
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
    
} ;

function errorAudio(){
    let sound = new Howl({
      src:['./utils/WINDOWS XP ERROR SOUND.wmv.mp3'],
      autoplay:true,
      loop:true,
      volume:1,
      
    });

    sound.play();
};



module.exports = {
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote
};
