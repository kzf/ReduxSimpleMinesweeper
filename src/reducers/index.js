import { combineReducers } from 'redux';
import ScoreReducer from './reducer_score';
import BoardReducer from './reducer_board';

const rootReducer = combineReducers({
  score: ScoreReducer,
  board: BoardReducer,
});

export default rootReducer;
