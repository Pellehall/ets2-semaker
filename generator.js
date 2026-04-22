function generateSave(objects) {
  let out = "";

  objects.forEach(o => {
    out += `${o.type} : ${o.uid} {\n`;

    Object.keys(o.props).forEach(k => {
      out += ` ${k}: ${o.props[k]}\n`;
    });

    out += "}\n\n";
  });

  return out;
}

// skapa ny accessory
function createAccessory(data_path) {
  return {
    type: "vehicle_addon_accessory",
    uid: "_nameless." + Math.random().toString(16).slice(2),
    props: {
      slot_name: "0",
      slot_hookup: "0",
      data_path: `"${data_path}"`,
      refund: "0"
    }
  };
}
