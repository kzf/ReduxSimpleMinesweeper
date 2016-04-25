const INCREMENT_SQUARE = 'INCREMENT_SQUARE';

const incrementSquare = function(i, j) {
  return {
    type: INCREMENT_SQUARE,
    i,
    j
  };
};

export { INCREMENT_SQUARE, incrementSquare };
