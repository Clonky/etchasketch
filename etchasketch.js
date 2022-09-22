const maxSize = 960;

function generateRow(nCols, maxSize) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (iCol=0; iCol < nCols; iCol++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${(maxSize / nCols)}px`
        cell.style.height = `${(maxSize / nCols)}px`
        row.appendChild(cell);
    }
    return row;
}

function generateField(nRows, maxSize) {
    const field = document.createElement("div");
    field.classList.add("field");
    for (iRow=0; iRow < nRows; iRow++) {
        let row = generateRow(nRows, maxSize);
        field.appendChild(row);
    }
    document.body.appendChild(field)
}

generateField(10, 960);

// exports
module.exports = generateRow;