fetch('stats.json')
.then(response => response.json())
.then(data => {
    const tbody = document.querySelector('#statsTable tbody');
    // data es un objeto { user_id: {victorias, derrotas, ultima_partida}, ... }
    
    // Convertir a array y ordenar por victorias desc y derrotas asc
    const ranking = Object.entries(data).sort((a, b) => {
    return b[1].victorias - a[1].victorias || a[1].derrotas - b[1].derrotas;
    });

    ranking.forEach(([userId, stats], i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${i + 1}</td>
        <td>${userId}</td> 
        <td>${stats.victorias}</td>
        <td>${stats.derrotas}</td>
    `;
    tbody.appendChild(tr);
    });
})
.catch(error => {
    console.error('Error cargando stats.json:', error);
});
