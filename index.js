const NotesModel = require('./notesModel');
const NotesView = require('./notesView');
const NotesApi = require('./notesApi');

const notesModel = new NotesModel;
const notesApi = new NotesApi;
const notesView = new NotesView(notesModel, notesApi);

console.log('The notes app is running');

notesApi.loadNotes((notes) => {
  notesModel.setNotes(notes);
  notesView.displayNotes();
});