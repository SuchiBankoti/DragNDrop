function allow_drop(event) {
  //use prevent default to allow drop
  event.preventDefault();
}
function on_dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}
function on_drop(event) {
  //this function takes the id of the target and append it to the dropzone
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  const draggedTag = document.getElementById(data);
  event.target.appendChild(draggedTag);
}
