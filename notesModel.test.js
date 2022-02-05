const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  describe('getNotes', () => {
    it('returns a note model', () => {
      const model = new NotesModel;
      
      expect(model.getNotes()).toEqual([]);
    })
  })
  describe('add note', () => {
    it('adds a note', () => {
      const notes2 = new NotesModel;
      notes2.addNote('Note test');
      
      expect(notes2.getNotes()).toEqual(['Note test'])
    })
  })

  describe('reset', () => {
    it('resets a note', () => {
      const notes3 = new NotesModel;
      notes3.addNote('Note test');
      notes3.reset();
      
      expect(notes3.getNotes()).toEqual([]);
    })
  })
})