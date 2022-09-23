const maxSize = 960;

function generateRow(nCols, maxSize) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (iCol=0; iCol < nCols; iCol++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${(maxSize / nCols)}px`
        cell.style.height = `${(maxSize / nCols)}px`
        cell.style.backgroundColor = "#FFFFFFFF";
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

function paintCell(event) {
    event.target.style.backgroundColor = "black";
}

function paintCellRainbow(event) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let target = `rgb(${r}, ${g}, ${b})`
    event.target.style.backgroundColor = target;
}

function paintCellIncrementally(event) {
    const currColor = event.target.style.backgroundColor
}

function readBackgroundColor(event) {
    console.log(event.target.style.backgroundColor);
}

function makeCellsInteractive(fun) {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((iCell) => {
        iCell.removeEventListener("mouseover", fun);
        iCell.addEventListener("mouseover", fun);
    })
}

function erase(event) {
    event.target.style.backgroundColor = "#FFFFFF"
}

function makeCellEraser() {
    makeCellsInteractive(erase);
}

function getUserSize() {
    let size = parseInt(prompt("Choose the size of your grid (max 100 cells per side)."));
    if (size > 100) {
        size = 100;
    }
    return size;
}

function resetField(fun, maxSize) {
    let size = getUserSize();
    let field = document.querySelector(".field");
    if (!field) return;
    field.remove();
    generateField(size, maxSize);
    makeCellsInteractive(fun);
}

function setup_shortcuts() {
    window.addEventListener("keydown", function (event)  {
        if (event.keyCode === 65) {
            makeCellsInteractive(paintCell);
        }
        else if (event.keyCode === 83) {
            makeCellsInteractive(paintCellRainbow);
        }
        else if (event.keyCode === 68) {
            makeCellsInteractive(erase);
        }
    })

}

function setup(fun, nRows, maxSize) {
    let wrapper = () => resetField(fun, nRows, maxSize);
    const resetButton = document.querySelector("#resetField");
    resetButton.addEventListener("click", wrapper)
    const blackPen = document.querySelector("#blackPen"); 
    blackPen.addEventListener("click", () => makeCellsInteractive(paintCell))
    const rainbowPen = document.querySelector("#rainbowPen");
    rainbowPen.addEventListener("click", () => makeCellsInteractive(paintCellRainbow))
    const eraser = document.querySelector("#eraser");
    eraser.addEventListener("click", makeCellEraser);
}

setup(paintCellRainbow, 960);
setup_shortcuts();
generateField(50, 960);
makeCellsInteractive(paintCellRainbow);

// exports
module.exports = generateRow;