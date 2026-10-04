const notes = ["Learn Git", "Push to GitHub"];

const input = document.querySelector("#note-input");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#notes");

function render() {
  list.innerHTML = "";
  for (const note of notes) {
    const item = document.createElement("li");
    item.textContent = note;
    const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.addEventListener("click", function () {
  notes.splice(notes.indexOf(note), 1);
  render();
});
item.appendChild(deleteBtn);
    list.appendChild(item);
  }
}

addBtn.addEventListener("click", function () {
  const text = input.value;
  if (text === "") {
    return;
  }
  notes.push(text);
  input.value = "";
  render();
});

render();