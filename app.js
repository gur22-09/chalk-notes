const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes');
const log = console.log;


//you can set the version too
yargs.version('1.1.0');



//we will use the yargs lib for better args parsing

//add command
yargs.command({
    command:'add',
    describe:'add a note',
    builder:{ //to set sub commands inside add, e.g add --title="Shopping"
       title:{
           describe:'Note Title',
           demandOption:true, //to enforce requirement to title whenever using add
           type:'string' //the type of values title will take
       },
       body:{
           describe:'Note body',
           demandOption:true,
           type:'string'
       }
    },
    handler({title,body}){
       
       notes.addNotes(title,body);
    }
});

//remove command
yargs.command({
    command:'remove',
    describe:'removing a note',
    builder:{
        title:{
            demandOption:true,
            type:String,
            describe:'note title to remove'
        }
    },
    handler({title}){
        
        notes.removeNotes(title);
    }
});


//list command
yargs.command({
    command:'list',
    describe:'list a note',
    handler(){
        notes.listNotes();
    }
});


//read command
yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
         demandOption:true,
         type:String,
         describe:"title of note to read" 
        }
    },
    handler({title}){
        
        notes.readNote(title);
    }
});


yargs.parse();//without it the yargs will not know to parse the argv.

















//the argv contains an array which by default contains 2 items and also the arguments we pass while 
//running the app with node. although dunno with nodemon how it will work?
// const command = process.argv[2];
// const log = console.log;
// log(process.argv);
// if(command ==='add'){
//   log(chalk.bgMagentaBright('adding and item'));
// }else if(command === 'remove'){
//     log(chalk.bgRed('removing and element'));
// }



//(hostedGameA, hostedGameB) => hostedGameB.uid.usrtype - hostedGameA.uid.usrtype
