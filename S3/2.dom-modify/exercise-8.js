let parrafo = document.createElement('p');
parrafo.textContent = "Voy en medio!";
let div2 = document.body.querySelector("body>div:nth-child(2)");
document.body.insertBefore(parrafo , div2);