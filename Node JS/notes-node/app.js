const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var titleOptions = {
  describe: 'Title of Note',
  demand: true,
  alias: 't'
}

var bodyOptions = {
  describe: 'Body of the Note',
  demand: true,
  alias:'b'
}

const argv = yargs
  .command('add', 'Add a new note',{
    title : titleOptions ,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title : titleOptions
  })
  .command('remove', 'Remove a note',{
    title : titleOptions
  })
  .help()
  .argv;
var command = process.argv[2];

if(command === 'add'){
  var note = notes.addNote(argv.title,argv.body);
  if(note){
    console.log('Note created Successfully');
    notes.logNote(note);
  }else {
    console.log('Note With Same Title Exists');
  }

}else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} Note(s)`);
  allNotes.forEach((note) => notes.logNote(note));

}else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if(note){
    console.log('Note Found');
    notes.logNote(note);
  }else{
    console.log('Note Not Found');
  }

}else if (command === 'remove') {
  var rem = notes.remNote(argv.title);
  if(rem){
    console.log('Note Removed');
  }else{
    console.log('Entered Title Doesnot Exist');
  }
}else {
  console.log('Command Not Recognised');
}
