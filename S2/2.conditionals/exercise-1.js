const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

let aprobado = 0;

for (let i = 0; i < alumns.length; i++) {
    const alumn = alumns[i];

   if (alumn.T1) {
    aprobado++;
   }
   if (alumn.T2) {
    aprobado++;
   }
   if (alumn.T3) {
    aprobado++;
   }

    alumn.isApproved = aprobado >= 2;
    //aprobado=0;
}

console.log(alumns);