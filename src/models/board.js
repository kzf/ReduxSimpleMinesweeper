class GameBoard {
  constructor(i, j) {
    // If i,j are both defined they must be both integers (width and height)
    // otherwise the single argument will be a GameBoard to clone
    if (j) {
      this.board = Array(j).fill().map(() => {
        return Array(i).fill().map(() => {
          return {
            covered: true,
            bomb:    (Math.random() < 0.05)
          }
        });
      });
      this.width = i;
      this.height = j;
      this.calculateNearby();
    } else {
      this.width = i.width;
      this.height = i.height
      this.board = i.board;
    }
  };

  rows() {
    return this.board;
  };

  uncover(x, y) {
    let newBoard = new GameBoard(this);
    // newBoard.board = newBoard.board.map((row, i) => {
    //   if (y != i) return row;
    //   return row.map((square, j) => {
    //     if (x != j) return square;
    //     return Object.assign({}, square, { covered: false });
    //   });
    // });
    // return newBoard;
    newBoard.revealCell(x, y);
    return newBoard;
  };

  calculateNearby() {
    var sum, i, j, x, y;
    for (j = 0; j < this.width; j++) {
      for (i = 0; i < this.width; i++) {
        sum = 0;
        for (x = -1; x <= 1; x++) {
          for (y = -1; y <= 1; y++) {
            if (x != 0 || y != 0) {
              sum += this.bombIndicator(i+x,j+y);
            }
          }
        }
        this.board[i][j].nearby = sum;
      }
    }
  };

  bombIndicator(x, y) {
    if (x < 0 || x >= this.width) return 0;
    if (y < 0 || y >= this.height) return 0;
    if (this.board[y][x].bomb) return 1;
    return 0;
  };

  revealCell(i, j) {
    if (i < 0 || i >= this.width) return;
    if (j < 0 || j >= this.height) return;
    var cell = this.board[j][i];
    if (!cell.covered || cell.bomb) return;
    this.board[j][i] = Object.assign({}, cell, { covered: false });;
    if (cell.nearby == 0) {
      this.revealCell(i-1, j);
      this.revealCell(i-1, j-1);
      this.revealCell(i+1, j);
      this.revealCell(i+1, j+1);
      this.revealCell(i, j-1);
      this.revealCell(i+1, j-1);
      this.revealCell(i, j+1);
      this.revealCell(i-1, j+1);
    }
  };

};

export default GameBoard;
