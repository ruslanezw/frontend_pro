function createPythagorasTable() {
    const table = document.querySelector(`#table`);

    for (let i = 1; i <= 10; i++) {
        const tableRow = document.createElement(`tr`);
        table.appendChild(tableRow);

        for (let j = 1; j <= 10; j++) {
            const tableCell = document.createElement(j === 1 || i === 1 ? 'th' : 'td');
            tableCell.textContent = i * j;
            tableRow.appendChild(tableCell);
        }
    }
}

createPythagorasTable();