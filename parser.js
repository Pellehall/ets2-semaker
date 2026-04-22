function parseSII(text) {
  const objects = [];

  const blocks = text.split("}");

  blocks.forEach(block => {
    if (!block.includes("{")) return;

    const [header, body] = block.split("{");
    const [type, uid] = header.split(":").map(s => s.trim());

    const obj = {
      type,
      uid,
      props: {}
    };

    body.split("\n").forEach(line => {
      line = line.trim();
      if (!line.includes(":")) return;

      const [key, value] = line.split(":");
      obj.props[key.trim()] = value.trim();
    });

    objects.push(obj);
  });

  return objects;
}

// hitta truck
function findTruck(objects) {
  return objects.find(o => o.type === "vehicle");
}

// hitta accessories
function findAccessories(objects) {
  return objects.filter(o =>
    o.type.includes("accessory")
  );
}
