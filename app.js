let objects = [];
let selected = [];

const fileInput = document.getElementById("fileInput");
const truckSelect = document.getElementById("truckSelect");
const grid = document.getElementById("partsGrid");
const selectedList = document.getElementById("selected");
const output = document.getElementById("output");
const categorySelect = document.getElementById("categorySelect");

// init trucks
Object.keys(TRUCKS).forEach(k => {
  const opt = document.createElement("option");
  opt.value = k;
  opt.innerText = TRUCKS[k].name;
  truckSelect.appendChild(opt);
});

// file load
fileInput.onchange = e => {
  const r = new FileReader();
  r.onload = () => {
    objects = parseSII(r.result);
    renderParts();
  };
  r.readAsText(e.target.files[0]);
};

// render parts
function renderParts() {
  grid.innerHTML = "";

  const filter = categorySelect.value;

  PARTS.forEach(p => {
    if (filter !== "all" && p.cat !== filter) return;

    const div = document.createElement("div");
    div.className = "part";
    div.innerText = p.name;

    div.onclick = () => {
      selected.push(p);
      renderSelected();
    };

    grid.appendChild(div);
  });
}

// selected
function renderSelected() {
  selectedList.innerHTML = "";

  selected.forEach(p => {
    const li = document.createElement("li");
    li.innerText = p.name;
    selectedList.appendChild(li);
  });
}

// export
function exportSave() {
  let out = "";

  selected.forEach((p, i) => {
    out += `
vehicle_addon_accessory : custom.${i} {
 data_path: "${p.data_path}"
}
`;
  });

  output.innerText = out;
}

// filter change
categorySelect.onchange = renderParts;

// init
renderParts();
