const NEW_GAME = 'NEW_GAME';

const newGame = function(i, j) {
  return {
    type: NEW_GAME,
    i,
    j
  };
};

export { NEW_GAME, newGame };
