var cellSize = 20;

var H = 12;
var W = 12;
var gameOver = false;

function haveIWon() {
  for (var i = 0; i < W; i++) {
    for (var j = 0; j < W; j++) {
      if (!cells[i][j].revealed && !cells[i][j].hasBomb) return false;
    }
  }
  return true;
}

function showBombs() {
  for (var i = 0; i < W; i++) {
    for (var j = 0; j < W; j++) {
      var cell = cells[i][j];
      if (cell.hasBomb) {
        cell.$cell.addClass('bomb');
      }
    }
  }
}

function handleEndGame() {
  if (haveIWon()) {
    setGameOver();
  }
}

function setGameOver() {
  gameOver = true;
  $board.addClass('gameOver');
  showBombs();
}

function createCell() {
  var c = $("<div>").html('&nbsp;').addClass('cell');
  return c;
}

function bombIndicator(i,j) {
  if (i < 0 || i >= H) return 0;
  if (j < 0 || j >= W) return 0;
  return cells[i][j].hasBomb ? 1 : 0;
}
function getNumber(i,j) {
  var sum = 0;
  for (var x = -1; x <= 1; x++) {
    for (var y = -1; y <= 1; y++) {
      if (x != 0 || y != 0) {
        sum += bombIndicator(i+x,j+y);
      }
    }
  }
  return sum;
}

function revealCell(i,j) {
  if (i < 0 || i >= H) return;
  if (j < 0 || j >= W) return;
  var cell = cells[i][j];
  if (cell.revealed || cell.hasBomb) return;
  cell.revealed = true;
  cell.$cell.addClass('clear');
  if (cell.number != 0) {
    cell.$cell.text(cell.number);
  } else {
    revealCell(i-1, j);
    revealCell(i-1, j-1);
    revealCell(i+1, j);
    revealCell(i+1, j+1);
    revealCell(i, j-1);
    revealCell(i+1, j-1);
    revealCell(i, j+1);
    revealCell(i-1, j+1);
  }
}

function handleCellClick(i, j) {
  return function(e) {
    if (gameOver) return;
    var cell = cells[i][j];
    if (!cell) return;
    if (cell.hasBomb) {
      setGameOver();
    } else if (!cell.revealed) {
      revealCell(i,j);
      handleEndGame();
    }
  };
}

var $board = $('.board');
$board.css('width', W*cellSize);

var cells = []
var cell;
for (var i = 0; i < W; i++) {
  cells[i] = [];
  for (var j = 0; j < W; j++) {
    cell = createCell();
    $board.append(cell);
    cell.click(handleCellClick(i,j));
    cells[i].push({
      $cell: cell,
      hasBomb: (Math.random() < 0.1),
    });
  }
}

for (var i = 0; i < W; i++) {
  for (var j = 0; j < W; j++) {
    cells[i][j].number = getNumber(i,j);
  }
}







  