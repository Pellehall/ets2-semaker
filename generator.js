function generateSII(parts, lightCount) {
  let output = "";

  parts.forEach((p, i) => {

    let slots = 1;
    let hookups = 1;

    // om det är lights → spam
    if (p.slot === "beacon" || p.slot === "r_grill") {
      slots = lightCount;
      hookups = lightCount;
    }

    output += `
vehicle_addon_accessory : custom.${i} {
 slot_name: ${slots}
`;

    for (let j = 0; j < slots; j++) {
      output += ` slot_name[${j}]: slot_${j}\n`;
    }

    output += ` slot_hookup: ${hookups}\n`;

    for (let j = 0; j < hookups; j++) {
      output += ` slot_hookup[${j}]: "smalllight1.addon_hookup"\n`;
    }

    output += ` data_path: "${p.data_path}"
}
`;
  });

  return output;
}
