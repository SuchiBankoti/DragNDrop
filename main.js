document.addEventListener("DOMContentLoaded", addItemsToContainer);
const main = document.getElementById("main");
const container = document.getElementById("container");
const dropzone = document.getElementById("dropzone");
const body = document.querySelector("body");

// create a message box to give msg after drop
const div = document.createElement("div");
div.id = "msgbox";
const p = document.createElement("p");
p.textContent = "Item Moved Succesfully";
div.appendChild(p);
body.appendChild(div);

function allow_drop(e) {
  //use prevent default to allow drop
  e.preventDefault();
}
function on_dragStart(e) {
  e.dataTransfer.setData("text", e.target.id);
  e.target.style.background = "white";
}
function on_drag(e) {
  e.preventDefault();
  if (e.dataTransfer.types.includes("text")) {
    e.target.style.background = "white";
  } else {
    e.target.style.background = "grey";
  }
}
function on_dragEnd(e) {
  e.target.style.background = "transparent";
}

function on_drop(e) {
  //this function takes the id of the target and append it to the dropzone
  e.preventDefault();
  removeDropIcon();

  let data = e.dataTransfer.getData("text");
  const draggedTag = document.getElementById(data);
  e.target.appendChild(draggedTag);
  addMsg();
  setTimeout(() => removeMsg(), 1000);
}

// creates  new image tags and append them to container
function addItemsToContainer() {
  for (let i = 1; i <= 8; i++) {
    const div = document.createElement("div");
    div.className = "item";
    div.draggable = true;
    div.id = `item${i}`;
    div.addEventListener("dragstart", on_dragStart);
    div.addEventListener("drag", on_drag);
    div.addEventListener("dragend", on_dragEnd);
    container.appendChild(div);
  }
}

function addMsg() {
  div.style.display = "block";
  main.style.filter = "blur(5px)";
}
function removeMsg() {
  const msgbox = document.getElementById("msgbox");
  msgbox.style.display = "none";
  main.style.filter = "blur(0)";
}

function removeDropIcon() {
  const icon = document.getElementById("dropIcon");
  if (icon) {
    dropzone.removeChild(icon);
  }
}
