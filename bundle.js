(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return this.notes;
        }
        addNote(note) {
          this.notes.push(note);
        }
        setNotes(notes) {
          this.notes = notes;
        }
        reset() {
          this.notes = [];
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(notesModel2, notesApi2) {
          this.notesModel = notesModel2;
          this.notesApi = notesApi2;
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#show-note-button");
          this.buttonEl.addEventListener("click", () => {
            const newNote = document.querySelector("#note-input").value;
            this.addNewNote(newNote);
          });
          this.inputEl = document.querySelector("#note-input");
        }
        displayNotes() {
          let notesArr = document.querySelectorAll("div.note");
          notesArr.forEach((note) => {
            note.remove();
          });
          const notes = this.notesModel.getNotes();
          notes.forEach((note) => {
            let noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
          document.querySelector("#note-input").value = "";
        }
        addNewNote(note) {
          this.notesModel.addNote(note);
          this.notesApi.createNote(note);
        }
      };
      module.exports = NotesView2;
    }
  });

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        createNote(note) {
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ "content": note })
          }).then((response) => response.json()).then((data) => {
            console.log("Success!!");
          });
        }
      };
      module.exports = NotesApi2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesApi = require_notesApi();
  var notesModel = new NotesModel();
  var notesApi = new NotesApi();
  var notesView = new NotesView(notesModel, notesApi);
  console.log("The notes app is running");
  notesApi.loadNotes((notes) => {
    notesModel.setNotes(notes);
    notesView.displayNotes();
  });
})();
