const fileInput = document.getElementById("fileInput");
const truckDiv = document.getElementById("truck");
const list = document.getElementById("accessories");
const output = document.getElementById("output");

let objects = [];
let accessories = [];

// load file
fileInput.onchange = e => {
  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    objects = parseSII(reader.result);

    const truck = findTruck(objects);
    accessories = findAccessories(objects);

    renderTruck(truck);
    renderAccessories();
  };

  reader.readAsText(file);
};

// render truck
function renderTruck(truck) {
  if (!truck) {
    truckDiv.innerText = "No truck found";
    return;
  }

  truckDiv.innerText = truck.uid;
}

// render accessories
function renderAccessories() {
  list.innerHTML = "";

  accessories.forEach(a => {
    const li = document.createElement("li");
    li.innerText = a.props.data_path || "unknown";
    list.appendChild(li);
  });
}

// add new part
function addPart() {
  const path = document.getElementById("newPart").value;
  if (!path) return;

  const newAcc = createAccessory(path);

  objects.push(newAcc);
  accessories.push(newAcc);

  renderAccessories();
}

// export save
function exportSave() {
  output.innerText = generateSave(objects);
}
