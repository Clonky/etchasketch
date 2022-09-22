function generateRow(nCols) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (iCol=0; iCol < nCols; iCol++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
    }
    return row;
}

// exports
module.exports = generateRow;