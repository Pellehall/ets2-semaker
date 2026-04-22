const partsDiv = document.getElementById("parts");
const selectedList = document.getElementById("selected");
const output = document.getElementById("output");
const truckSelect = document.getElementById("truckSelect");
const chaosMode = document.getElementById("chaosMode");
const slider = document.getElementById("lightSlider");
const lightValue = document.getElementById("lightValue");

let selectedParts = [];
let currentTruck = "scania";

// init trucks
Object.keys(TRUCKS).forEach(key => {
  const opt = document.createElement("option");
  opt.value = key;
  opt.textContent = TRUCKS[key].name;
  truckSelect.appendChild(opt);
});

truckSelect.onchange = () => {
  currentTruck = truckSelect.value;
  renderParts();
};

// slider
slider.oninput = () => {
  lightValue.innerText = slider.value;
};

// check slot compatibility
function isValid(part) {
  if (chaosMode.checked) return true;
  return TRUCKS[currentTruck].slots.includes(part.slot);
}

// render parts
function renderParts() {
  partsDiv.innerHTML = "";

  PARTS.forEach(part => {
    const btn = document.createElement("button");
    btn.innerText = part.name;

    const valid = isValid(part);
    btn.className = valid ? "valid" : "invalid";

    btn.onclick = () => {
      if (!valid && !chaosMode.checked) return;
      selectedParts.push(part);
      renderSelected();
    };

    partsDiv.appendChild(btn);
  });
}

// render selected
function renderSelected() {
  selectedList.innerHTML = "";

  selectedParts.forEach(p => {
    const li = document.createElement("li");
    li.innerText = p.name + " (" + p.slot + ")";
    selectedList.appendChild(li);
  });
}

// generate
function generate() {
  output.innerText = generateSII(selectedParts, slider.value);
}

// init
renderParts();
