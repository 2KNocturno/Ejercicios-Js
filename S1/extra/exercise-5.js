const products = [
            {name: 'Gorra de rodilla', sellCount: 10},
            {name: 'Pantalón de pana', sellCount: 302},
            {name: 'Reloj de papel albal', sellCount: 23},
            {name: 'Inpar de zapatos', sellCount: 6}
];

let sumaTotal = 0;
let numeroProductos = 0;
let media = 0;

for (let i = 0; i < products.length; i++) {
    const precio = products[i];
    sumaTotal += precio.sellCount;
    numeroProductos += 1;
    media = (sumaTotal / numeroProductos);
}
console.log(media)