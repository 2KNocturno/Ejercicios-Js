let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
console.log("El precio final de car1 es",car1.basePrice+globalBasePrice);
console.log("El precio final de car2 es",car2.basePrice+globalBasePrice);