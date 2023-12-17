let divTexto = document.querySelectorAll('.fn-insert-here')

divTexto.forEach(element => {
    let parrafo = document.createElement('p')
    parrafo.textContent = 'Voy dentro!'
    element.appendChild(parrafo)
    
});