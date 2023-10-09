const form = document.getElementById('table-form');
const tableContainer = document.getElementById('table-container');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const pocet = parseInt(document.getElementById('pocet').value);
    const sloupec = parseInt(document.getElementById('sloupec').value);

    const table = document.createElement('table');
    for (let i = 0; i < pocet; i++) {
        const pocet = document.createElement('tr');
        for (let j = 0; j < sloupec; j++) {
            const cell = document.createElement(i === 0 ? 'th' : 'td');
            cell.textContent = R${i + 1}C${j + 1};
            pocet.appendChild(cell);
        }
        table.appendChild(pocet);
    }

    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
});