const fs = require('fs');


const getNotes = ()=>('your damn notes...');


const addNotes = (title,body)=>{
   const notes = loadNotes();
   const duplicateNotes = notes.filter(el=>{
       notes.title === title;
   });

   if(!duplicateNotes){
    notes.push({
        title:title,
        body:body
    });
    errorAudio();
    console.log('notes added');
   }else{
       
       console.log('note already exixts!');
      
   }

  
   saveNotes(notes);
}


function saveNotes(notes){
    const notesJSON = JSON.stringify(notes);

    fs.writeFileSync('notes.json',notesJSON);
}

function errorAudio(){
    let sound = new Howl({
      src:['./utils/WINDOWS XP ERROR SOUND.wmv.mp3'],
      autoplay:true,
      loop:true,
      volume:1,
      
    });

    sound.play();
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
