"use strict";
let colorCell = (div) => {
    div.style.backgroundColor = "blue";
};
window.oncontextmenu = function () {
    return false; // cancel default menu
};
let buildHTMLGrid = () => {
    let nCols = document.querySelector('#nOfColumns');
    let nRows = document.getElementById('nOfRows');
    let gridContainer = document.getElementById("gridContainer");
    let gridTemplateString = "";
    for (let col = 0; col != nCols.valueAsNumber; ++col) {
        gridTemplateString += "auto ";
    }
    gridContainer.style.gridTemplateColumns = gridTemplateString;
    let container = document.getElementById("gridContainer");
    container.innerHTML = "";
    for (let row = 0; row != nRows.valueAsNumber; ++row) {
        for (let col = 0; col != nCols.valueAsNumber; ++col) {
            let div = document.createElement("div");
            div.id = `cell${col},${row}`;
            div.className = "grid-item";
            div.innerText = "";
            div.addEventListener("mousedown", (e) => {
                console.log(e);
                if (e.button == 0) {
                    div.style.backgroundColor =
                        (div.style.backgroundColor == "blue") ? "white" : "blue";
                }
                else if (e.button == 2) {
                    div.style.backgroundColor =
                        (div.style.backgroundColor == "red") ? "white" : "red";
                }
            });
            container === null || container === void 0 ? void 0 : container.appendChild(div);
        }
    }
};
let gridSizeButton = document.getElementById("gridSizeButton");
gridSizeButton.addEventListener('click', buildHTMLGrid);
