import { INCREMENT_SCORE } from '../actions/increment_score';

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_SCORE:
      return state + 1;
  }
  return state;
};
