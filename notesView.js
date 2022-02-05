class NotesView{
  constructor(notesModel, notesApi) {
    this.notesModel = notesModel;
    this.notesApi = notesApi;
    this.mainContainerEl = document.querySelector('#main-container');
    this.buttonEl = document.querySelector('#show-note-button');

    this.buttonEl.addEventListener('click', () => {
      const newNote = document.querySelector('#note-input').value;
      this.addNewNote(newNote);
    });
    this.inputEl = document.querySelector('#note-input');
  }

  displayNotes() {
    let notesArr = document.querySelectorAll('div.note');
    notesArr.forEach(note => {
      note.remove();
    });
    const notes = this.notesModel.getNotes();

    notes.forEach(note => {
      let noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    });
    document.querySelector('#note-input').value = '';
  }

  addNewNote(note) {
    this.notesModel.addNote(note);
    this.notesApi.createNote(note);
    this.displayNotes();
  }
}

module.exports = NotesView;
