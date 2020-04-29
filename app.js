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
    handler(argv){
       const {title,body} = argv;
       notes.addNotes(title,body);
    }
});

//remove command
yargs.command({
    command:'remove',
    describe:'removing a note',
    handler(){
        log(chalk.blue('removin the note'));
    }
});


//list command
yargs.command({
    command:'list',
    describe:'list a note',
    handler(){
        log(chalk.bgGreen('listing a note'));
    }
});


//read command
yargs.command({
    command:'read',
    describe:'read a note',
    handler(){
        log(chalk.red('reading a note'));
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

