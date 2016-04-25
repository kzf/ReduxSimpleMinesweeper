import { INCREMENT_SQUARE } from '../actions/increment_square';

export default (state = null, action) => {
  if (state === null) {
    return [
      [1,1,1,1],
      [1,1,1,1],
      [1,1,1,1],
      [1,1,1,1],
    ];
  }

  switch (action.type) {
    case INCREMENT_SQUARE:
      return state.map((row, i) => {
        if (action.i != i) return row;
        return row.map((square, j) => {
          if (action.j != j) return square;
          return square + 1;
        });
      });
  }

  return state;
};
