const animalFunction = () => {
  return { name: "Bengal Tiger", race: "Tiger" };
};

let nombre = animalFunction().name
let raza = animalFunction().race

console.log(nombre, raza)