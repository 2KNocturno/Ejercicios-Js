const baseUrl = 'https://api.nationalize.io';

const input = document.querySelector('input');
const button = document.querySelector('button');

const busqueda = () => {
    fetch(baseUrl + '?name=' + input.value).then(res => res.json()).then(res =>{
        console.log(res);
    })
}

button.addEventListener('click', busqueda);