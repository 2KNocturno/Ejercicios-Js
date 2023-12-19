const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

let nameAll = users.map(function(params) {
    if (params.name.includes("A") ) {
        params.name = "Anacleto"
        return params.name;
    }  else {
        return params.name;
    }
})

console.log(nameAll);