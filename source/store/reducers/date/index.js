const assign = Object.assign;

export default (
    state = { nextMathBirthdayNumber: null, nextMathBirthdayFromNow: null },
    { nextMathBirthdayNumber, nextMathBirthdayFromNow, type } = {}
  ) => {
  switch (type) {
    case 'SET_DATE':
      return assign({}, state, {
        nextMathBirthdayNumber,
        nextMathBirthdayFromNow
      });
    default:
      return state;
  }

};
