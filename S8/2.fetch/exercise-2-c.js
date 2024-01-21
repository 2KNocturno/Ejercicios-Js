const url = 'https://api.nationalize.io';

const busqueda = () => {
    const input = document.querySelector('input');

    fetch(url + '?name=' + input.value).then(res => res.json()).then(person => {
        creaLaP(person)
    })
}

const creaLaP = (person) => {
    let text = `El nombre ${person.name} tiene`;

    for (const country of person.country) {
        const percentage = Math.floor(country.probability * 100)
        text += ` un ${percentage} porciento de ser de ${country.country_id}`;
    }

    const div = document.createElement('div');
    const p = document.createElement('p');
    const button = document.createElement('button');

    p.textContent = text;
    button.innerHTML = 'X';

    div.appendChild(p);
    div.appendChild(button);

    button.addEventListener('click', () => { eliminaP(div) })
    document.body.appendChild(div);
}


const eliminaP = (nodeEl$$) => {
    nodeEl$$.remove();
}

const button$ = document.querySelector('button');

button$.addEventListener('click', busqueda);