
// iterate throught table row and cells
function makeGrid(row, cell) {
  var table = document.getElementById("pixelCanvas");
  var grid = "";

  // loop over row
  for (var i = 0; i < row; i++){
    grid += '<tr class="row-' + i + '">';
    // loop for cell
    for (var j = 0; j < cell; j++){
      grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
    }
    grid += '</tr>';
  }

// add table grid
  table.innerHTML = grid;
// Add click
  addClickEventToCells();
}

// input value to call makeGrid
function submission() {
    event.preventDefault();
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    makeGrid(height, width);
}

// add click events to all cells
function addClickEventToCells() {
  var cells = document.getElementsByClassName("cell");
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function(event) {
      var clickedCell = event.target;
      clickedCell.style.backgroundColor = selectedColor;
    });
  }
}

// Select color input
var colorPicker = document.getElementById("colorPicker");
var selectedColor = colorPicker.value;

colorPicker.addEventListener("input", function() {
  selectedColor = colorPicker.value;
  }, false);

// on submit
document.getElementById('sizePicker').onsubmit = function() {
  submission();
};
