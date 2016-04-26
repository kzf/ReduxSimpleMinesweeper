import { INCREMENT_SQUARE } from '../actions/increment_square';
import { NEW_GAME } from '../actions/new_game';

const generateBoard = function(i, j) {
  return Array(j).fill().map(() => {
    return Array(i).fill().map(() => {
      return {
        covered: true,
        bomb: false,
        nearby: Math.round(Math.random()*9)
      }
    });
  });
};

export default (state = null, action) => {
  if (state === null) {
    return generateBoard(10, 10);
  }

  switch (action.type) {
    case INCREMENT_SQUARE:
      return state.map((row, i) => {
        if (action.i != i) return row;
        return row.map((square, j) => {
          if (action.j != j) return square;
          return Object.assign({}, square, { covered: false });
        });
      });
    case NEW_GAME:
      return generateBoard(action.i, action.j);
  }

  return state;
};
