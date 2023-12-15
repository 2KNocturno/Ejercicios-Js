const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let guradadoLista = document.createElement('ul');
document.body.appendChild(guradadoLista);

for (const lista of apps) {
    let liApps = document.createElement('li');
    liApps.textContent = apps;
    guradadoLista.appendChild(liApps)
}