const addBtn = document.getElementById("addNote");
const container = document.getElementById("notesContainer");

// Load notes from localStorage
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(noteText => createNote(noteText));
}

// Save notes to localStorage
function saveNotes() {
    const notes = [];
    document.querySelectorAll(".note textarea").forEach(textarea => {
        notes.push(textarea.value);
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Create a new note
function createNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note");

    const textarea = document.createElement("textarea");
    textarea.value = text;

    const deleteBtn = document.createElement("span");
    deleteBtn.innerText = "×";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.addEventListener("click", () => {
        note.remove();
        saveNotes();
    });

    textarea.addEventListener("input", saveNotes);

    note.appendChild(deleteBtn);
    note.appendChild(textarea);
    container.appendChild(note);
}

// Add note button
addBtn.addEventListener("click", () => createNote());

// Initialize
loadNotes();
