let miFuncion = document.querySelector('input')

function fnc(events) {
    console.log(events.target.value);
}

miFuncion.addEventListener(`focus`, fnc)
console.log(fnc);