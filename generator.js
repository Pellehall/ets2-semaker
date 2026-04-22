function generateSII(parts) {
  let output = "";

  parts.forEach((p, i) => {
    output += `
vehicle_addon_accessory : custom.${i} {
 slot_name: 0
 slot_hookup: 0
 data_path: "${p.data_path}"
}
`;
  });

  return output;
}
