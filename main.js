document.addEventListener("DOMContentLoaded", addImagesToContainer);

// create a message box to give msg after drop
const body = document.querySelector("body");
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
  e.target.style.opacity = "0.5";
}
function on_drag(e) {
  e.preventDefault();
  e.target.style.opacity = "0.5";
}
function on_dragEnd(e) {
  e.target.style.opacity = "1";
}

function on_drop(e) {
  //this function takes the id of the target and append it to the dropzone
  e.preventDefault();
  let data = e.dataTransfer.getData("text");
  const draggedTag = document.getElementById(data);
  e.target.style.opacity = "1";
  e.target.appendChild(draggedTag);
  addMsg();
  setTimeout(() => removeMsg(), 1000);
}

// creates  new image tags and append them to container
function addImagesToContainer() {
  const container = document.getElementById("container");
  for (let i = 1; i <= 8; i++) {
    const newimg = document.createElement("img");
    newimg.className = "item";
    newimg.id = `img${i}`;
    newimg.alt = "logo";
    newimg.src = `./items/i${i}.png`;
    newimg.draggable = true;
    newimg.addEventListener("dragend", on_dragEnd);
    newimg.addEventListener("drag", on_drag);
    newimg.addEventListener("dragstart", on_dragStart);
    container.appendChild(newimg);
  }
}

function addMsg() {
  const main = document.getElementById("main");
  div.style.display = "block";
  main.style.filter = "blur(5px)";
}
function removeMsg() {
  const msgbox = document.getElementById("msgbox");
  msgbox.style.display = "none";
  const main = document.getElementById("main");
  main.style.filter = "blur(0)";
}
