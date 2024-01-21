const url = "https://api.nationalize.io";
const boton = document.querySelector("button");
const input = document.querySelector("input");

const busqueda = () => {
  fetch(url + "?name=" + input.value)
    .then((res) => res.json())
    .then((person) => {
      creaLaP(person);
    });
};

const creaLaP = (person) => {
  const p$$ = document.createElement("p");
  let text = `El nombre ${person.name} tiene`;

  for (const country of person.country) {
    const percentage = Math.floor(country.probability * 100);
    text += ` un ${percentage} porciento de ser de ${country.country_id}`;
  }

  p$$.textContent = text;

  document.body.appendChild(p$$);
};

boton.addEventListener("click", busqueda);