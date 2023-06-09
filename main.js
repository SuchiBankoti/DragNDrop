document.addEventListener("DOMContentLoaded", addImagesToContainer);

function allow_drop(e) {
  //use prevent default to allow drop
  e.preventDefault();
}
function on_dragStart(e) {
  e.dataTransfer.setData("text", e.target.id);
}
function on_drop(e) {
  //this function takes the id of the target and append it to the dropzone
  e.preventDefault();
  let data = e.dataTransfer.getData("text");
  const draggedTag = document.getElementById(data);
  e.target.appendChild(draggedTag);
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
    newimg.addEventListener("dragstart", on_dragStart);
    container.appendChild(newimg);
  }
}
