const addBtn = document.querySelector(".add");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const deleteNoteBtn = document.getElementsByClassName(".delete-note");

const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");
const category = document.querySelector("#category");
const textArea = document.querySelector("#text");
const deleteBtn = document.querySelector(".delete-all");
const errorMsg = document.querySelector(".error");

let selectedValue;

let cardId = 0;

const openPanel = () => {
	notePanel.style.display = "flex";
};
const closePanel = () => {
	notePanel.style.display = "none";
	errorMsg.style.visibility = "hidden";
	textArea.value = "";
	category.selectedIndex = 0;
};
const addNote = () => {
	if (
		textArea.value !== "" &&
		category.options[category.selectedIndex].value !== "0"
	) {
		createNote();
		errorMsg.style.visibility = "hidden";
	} else {
		errorMsg.style.visibility = "visible";
	}
};

const createNote = () => {
	const newNote = document.createElement("div");
	newNote.classList.add("note");
	newNote.setAttribute("id", cardId);

	newNote.innerHTML = `
    <div class="note-header">
        <h3 class="note-title">${selectedValue}</h3>
        <button class="delete-note" onclick="deleteNote(${cardId})">
            <i class="fas fa-times icon"></i>
        </button>
    </div>
    <div class="note-body">
        ${textArea.value}
    </div>`;

	noteArea.append(newNote);
	cardId++;
	closePanel();
	checkColor(newNote);
};

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
};

const checkColor = note => {
	switch (selectedValue) {
		case "Zakupy":
			note.style.backgroundColor = "rgb(72, 255, 0)";
			break;
		case "Praca":
			note.style.backgroundColor = "rgb(255, 243, 0)";
			break;
		case "Inne":
			note.style.backgroundColor = "rgb(0, 170, 255)";
			break;
	}
};
const deleteNote = id => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};
const deleteAllNotes = () => {
    noteArea.textContent = '';
}

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", addNote);
deleteBtn.addEventListener('click', deleteAllNotes);