
export default (state = null, action) => {
  console.log('board reduce')
  if (state === null) {
    return [
      [1,1,1,1],
      [1,1,1,1],
      [1,1,1,1],
      [1,1,1,1],
    ];
  }
  return state;
};
