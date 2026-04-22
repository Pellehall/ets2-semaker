const partsDiv = document.getElementById("parts");
const selectedList = document.getElementById("selected");
const output = document.getElementById("output");

let selectedParts = [];

// render parts
PARTS.forEach(part => {
  const btn = document.createElement("button");
  btn.innerText = part.name;
  btn.className = "part";

  btn.onclick = () => {
    selectedParts.push(part);
    renderSelected();
  };

  partsDiv.appendChild(btn);
});

// render selected list
function renderSelected() {
  selectedList.innerHTML = "";

  selectedParts.forEach((p, i) => {
    const li = document.createElement("li");
    li.innerText = p.name + " (" + p.slot + ")";
    selectedList.appendChild(li);
  });
}

// generate code
function generate() {
  output.innerText = generateSII(selectedParts);
}
