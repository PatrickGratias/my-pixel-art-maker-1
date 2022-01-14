// When size is submitted by the user, call makeGrid()
const createCanvasButton = document.getElementById("createCanvasButton");
createCanvasButton.addEventListener("click", () => {
  makeGrid();
  event.preventDefault();
})


function makeGrid() {
  // Select size input
  const gridHeight = document.getElementById("inputHeight").value;
  const gridWidth = document.getElementById("inputWidth").value;
  // "focus" the grid
  let table = document.getElementById("pixelCanvas");
  // reset the grid
  table.innerHTML = "";
  // create the grid, column by column, row by row
  for (let x = 0; x < gridWidth; x++) {
    let gridRow = document.createElement("tr");
    for (let y = 0; y < gridHeight; y++) {
      let gridColumn = document.createElement("td");
      // on click change the bgColor if its not already the selected, else delete the color
      gridColumn.addEventListener("click", () => {
        // Select color input
        const color = document.getElementById("colorPicker").value;
        let oldColor = gridColumn.style.backgroundColor;
        gridColumn.style.backgroundColor = color;
        if (gridColumn.style.backgroundColor === oldColor) {
          gridColumn.removeAttribute("style");
        }
      })
      // add the column to the row
      gridRow.appendChild(gridColumn);
    }
    // add the row to the table/grid
    table.appendChild(gridRow);
  }
}
