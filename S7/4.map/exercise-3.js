const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

let nombres = cities.map(city => ({
    name: city.isVisited ? `${city.name} (Visitado)` : city.name
}))

console.log(nombres)