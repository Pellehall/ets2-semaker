const TRUCKS = {
  scania: {
    name: "Scania Streamline",
    slots: ["f_grill", "beacon", "exhaust", "interior", "wheel"]
  },
  daf: {
    name: "DAF XF",
    slots: ["f_grill", "beacon", "exhaust", "wheel"]
  },
  volvo: {
    name: "Volvo FH",
    slots: ["f_grill", "beacon", "interior", "wheel"]
  }
};

// base templates
const BASE_PARTS = [
  { name: "Grill Chrome A", slot: "f_grill", cat: "grill" },
  { name: "Grill Black B", slot: "f_grill", cat: "grill" },
  { name: "LED Bar Small", slot: "beacon", cat: "lights" },
  { name: "LED Bar Large", slot: "beacon", cat: "lights" },
  { name: "Exhaust Chrome", slot: "exhaust", cat: "exhaust" },
  { name: "Exhaust Black", slot: "exhaust", cat: "exhaust" },
  { name: "Steering Wheel Sport", slot: "interior", cat: "interior" },
  { name: "Steering Wheel Classic", slot: "interior", cat: "interior" },
  { name: "Wheel Steel", slot: "wheel", cat: "wheels" },
  { name: "Wheel Alloy", slot: "wheel", cat: "wheels" }
];

// 🔥 generate 200+ parts automatically
const PARTS = [];

for (let i = 0; i < 25; i++) {
  BASE_PARTS.forEach(p => {
    PARTS.push({
      name: `${p.name} Mk${i}`,
      slot: p.slot,
      cat: p.cat,
      data_path: `/def/vehicle/truck/${p.slot}/variant_${i}.sii`
    });
  });
}
