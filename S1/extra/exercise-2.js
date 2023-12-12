const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
                    {name: "Salad", isVegan: true},
                    {name: "Salmon", isVegan: false}, 
                    {name: "Tofu", isVegan: true}, 
                    {name: "Burger", isVegan: false}, 
                    {name: "Rice", isVegan: true}, 
                    {name: "Pasta", isVegan: true}
];

for (let i = 0; i < foodSchedule.length; i++) {
    const plato = foodSchedule[i];
    if (plato.isVegan ===false){
        console.log(plato)
    } 
    if (!plato.isVegan) {
        plato.isVegan = true;
        console.log(plato);
        plato.name = fruits [i];
    }    console.log(plato);
    
}