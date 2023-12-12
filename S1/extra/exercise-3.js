const movies = [
            {name: "Your Name", durationInMinutes: 130},
            {name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
            {name: "Origen", durationInMinutes: 165}, 
            {name: "El señor de los anillos", durationInMinutes: 967}, 
            {name: "Solo en casa", durationInMinutes: 214}, 
            {name: "El jardin de las palabras", durationInMinutes: 40}
];

for (let i = 0; i < movies.length; i++) {
    const minutos = movies[i];
    if (minutos.durationInMinutes <= 100){ 
        console.log("Pelicula corta")
    } else if (minutos.durationInMinutes >= 200){
        console.log("Pelicula grande")
    } else if (minutos.durationInMinutes >= 100){
        console.log("Pelicula mediana")
    } else {
        console.log("No pasa nada")
    }
        
}