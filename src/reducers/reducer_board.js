import { INCREMENT_SQUARE } from '../actions/increment_square';
import { NEW_GAME } from '../actions/new_game';
import GameBoard from '../models/board';


export default (state = null, action) => {
  if (state === null) {
    return new GameBoard(10, 10);
  }

  switch (action.type) {
    case INCREMENT_SQUARE:
      return state.uncover(action.i, action.j);
    case NEW_GAME:
      return new GameBoard(action.i, action.j);
  }

  return state;
};
