const form = document.getElementById('table-form');
const tableContainer = document.getElementById('table-container');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const rows = parseInt(document.getElementById('rows').value);
    const columns = parseInt(document.getElementById('columns').value);

    const table = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const cell = document.createElement(i === 0 ? 'th' : 'td');
            cell.textContent = R${i + 1}C${j + 1};
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    tableContainer.innerHTML = '';
    tableContainer.appendChild(table);
});