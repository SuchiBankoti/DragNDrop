const data = [
  {
    tag: "i",
    className: "icon",
    icon: "heart",
  },
  {
    tag: "i",
    className: "icon",
    icon: "bell-off",
  },
  {
    tag: "i",
    className: "icon",
    icon: "alert-triangle",
  },
  {
    tag: "img",
    atNames: ["alt", "src"],
    atValues: ["logo", "./items/i1.png"],
  },
  {
    tag: "img",
    atNames: ["alt", "src"],
    atValues: ["logo", "./items/i2.png"],
  },
  {
    tag: "img",
    atNames: ["alt", "src"],
    atValues: ["logo", "./items/i3.png"],
  },
  {
    tag: "h2",
    content: "Drag",
    className: "text",
  },
  {
    tag: "h2",
    content: "And",
    className: "text",
  },
  {
    tag: "h2",
    content: "Drop",
    className: "text",
  },
  {
    tag: "img",
    atNames: ["alt", "src"],
    atValues: ["logo", "./items/i4.png"],
  },
  {
    tag: "img",
    atNames: ["alt", "src"],
    atValues: ["logo", "./items/i5.png"],
  },
  {
    tag: "img",
    atNames: ["alt", "src"],
    atValues: ["logo", "./items/i6.png"],
  },
];

document.addEventListener("DOMContentLoaded", addItemsToContainer);
const main = document.getElementById("main");
const container = document.getElementById("container");
const dropContainer = document.getElementById("dropContainer");
const dropzone = document.getElementById("dropzone");
const body = document.querySelector("body");

// create dialogue box to give msg after drop
const msg = document.createElement("div");
const p = document.createElement("p");
const i = document.createElement("i");
i.setAttribute("data-feather", "check");
i.classList.add("icon");
msg.id = "msgbox";
p.textContent = "Item Moved Succesfully";
msg.appendChild(p);
msg.appendChild(i);
body.appendChild(msg);

// drag and drop functionality
function allow_drop(e) {
  e.preventDefault();
}
function on_dragStart(e) {
  e.dataTransfer.setData("text", e.target.id);
  e.target.style.backgroundColor = "white";
}
function on_drag(e) {
  e.preventDefault();
  if (e.dataTransfer.types.includes("text")) {
    e.target.style.backgroundColor = "white";
  } else {
    e.target.style.backgroundColor = "grey";
  }
}
function on_dragEnd(e) {
  e.target.style.backgroundColor = "transparent";
}
function on_drop(e) {
  e.preventDefault();
  let data = e.dataTransfer.getData("text");
  const draggedTag = document.getElementById(data);
  draggedTag.style.border = "0";
  draggedTag.style.cursor = "not-allowed";
  dropzone.appendChild(draggedTag);
  addMsg();
  setTimeout(() => removeMsg(), 1000);
  removeDropIcon();
}

//  append items to container
function addItemsToContainer() {
  data.forEach((obj, i) => {
    const div = document.createElement("div");
    const tag = document.createElement(`${obj.tag}`);
    if (obj.tag === "i") {
      tag.setAttribute("data-feather", obj.icon);
      tag.classList.add(obj.className);
    } else if (obj.tag === "img") {
      for (let j = 0; j < obj.atNames.length; j++) {
        tag.setAttribute(`${obj.atNames[j]}`, `${obj.atValues[j]}`);
      }
    } else {
      tag.classList.add(obj.className);
      tag.textContent = `${obj.content}`;
    }
    div.className = "item";
    div.draggable = true;
    div.id = `item${i}`;
    div.addEventListener("dragstart", on_dragStart);
    div.addEventListener("drag", on_drag);
    div.addEventListener("dragend", on_dragEnd);
    div.appendChild(tag);
    container.appendChild(div);
    feather.replace(); // Initialize the Feather Icons library
  });
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
    dropContainer.removeChild(icon);
  }
}
function reset() {
  console.log("resstt");
  location.reload();
}
