const table = document.querySelector(`#table`)

function createPythagorasTable() {
    const tablePythagor = document.createElement(`table`);

    for (let i = 1; i <= 10; i++) {
        const tableRow = document.createElement(`tr`)

        for (let j = 1; j <= 10; j++) {
            const tableCell = document.createElement(j === 1 || i === 1 ? 'th' : 'td');
            tableCell.textContent = i * j;
            tableRow.appendChild(tableCell);
        }

        tablePythagor.appendChild(tableRow);
    }

    table.appendChild(tablePythagor);
}

createPythagorasTable();