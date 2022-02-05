
const NotesApi = require('./notesApi');

require('jest-fetch-mock').enableMocks()

describe('note class', () => {
  it('calls fetch and loads notes', async () => {
    const notesApi = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      note: 'I am a note'
      }));
    
    notesApi.loadNotes((notes) => {
      expect(notes.note).toBe('I am a note');
    });
  });

  // it('makes POST request to create new note on backend', async () => {
  //   const notesApi = new NotesApi();
  //   fetch.mockResponseOnce(JSON.stringify({
  //     note: 'I am also a note'
  //   }));

  //   notesApi.createNote('I am also a note');
  //   notesApi.loadNotes((notes) => {
  //     expect(notes.note).toBe('I am also a note');
  //   });
  // })
});
