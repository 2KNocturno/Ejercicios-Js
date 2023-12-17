let miFuncion = document.querySelector('input')

function fnc(events) {
    console.log(events.target.value);
}

miFuncion.addEventListener(`input`, fnc)
console.log(fnc);