/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NotesView = require('./notesView')
const NotesModel = require('./notesModel')
 
describe ("Notes View", () => {
  it("displays notes in the browser", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
 
    const notesModel = { 
      getNotes: () => ['testing', 'testing2']
    }
    const view = new NotesView(notesModel);
 
    view.displayNotes();
 
    expect(document.querySelectorAll('div.note').length).toBe(2);
 
  })

  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model)
    const buttonEl = document.querySelector('#show-note-button');
    const inputEl = document.querySelector('#note-input');

    inputEl.value = 'this is a note';
    buttonEl.click();

    expect(document.querySelectorAll('div.note')).not.toBeNull();
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('this is a note');
  });

  it('displays the right number of notes when the displayNotes is called twice', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);
    const inputEl = document.querySelector('#note-input');
    const buttonEl = document.querySelector('#show-note-button');
    
    inputEl.value = 'A note of our choice'
    buttonEl.click();
    inputEl.value = 'Another note of our choice'
    buttonEl.click();

    expect(document.querySelectorAll('.note').length).toBe(2);
  });
})