const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

let count = 0;

for (const toy of toys) {
  count++;
  if (toy.name.includes("gato")) {
    delete toys[count - 1];
  }
}
console.log(toys);

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];
