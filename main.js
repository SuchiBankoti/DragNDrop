document.addEventListener("DOMContentLoaded", addItemsToContainer);
const main = document.getElementById("main");
const container = document.getElementById("container");
const dropzone = document.getElementById("dropzone");
const body = document.querySelector("body");

// create a message box to give msg after drop
const msg = document.createElement("div");
const p = document.createElement("p");
msg.id = "msgbox";
p.textContent = "Item Moved Succesfully";
msg.appendChild(p);
body.appendChild(msg);

// drag and drop functionality
function allow_drop(e) {
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
  e.preventDefault();
  removeDropIcon();
  let data = e.dataTransfer.getData("text");
  const itemContainer = document.createElement("div");
  itemContainer.className = "item-container";
  const draggedTag = document.getElementById(data);
  draggedTag.style.height = "70px";
  itemContainer.appendChild(draggedTag);
  e.target.appendChild(itemContainer);
  addMsg();
  setTimeout(() => removeMsg(), 1000);
}

//  append items to container
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
  msg.style.display = "block";
  main.style.filter = "blur(5px)";
}
function removeMsg() {
  msg.style.display = "none";
  main.style.filter = "blur(0)";
}

function removeDropIcon() {
  const icon = document.getElementById("dropIcon");
  if (icon) {
    dropzone.removeChild(icon);
  }
}
function reset() {
  console.log("resstt");
  location.reload();
}
