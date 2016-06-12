import test from 'tape';
import deepFreeze from 'deep-freeze';

import date from 'store/reducers/date';


test('SET_DATE', nest => {
  nest.test('...initial', assert => {
    const message = `should set { nextMathBirthdayNumber: null, nextMathBirthdayFromNow: null }`;

    const expected = {
      nextMathBirthdayNumber: null,
      nextMathBirthdayFromNow: null
    };

    const actual = date();

    assert.deepEqual(actual, expected, message);
    assert.end();
  });


  nest.test(`...with { date: '11/13/1985'}`, assert => {
    const message = 'should set date to "11/13/1985"';

    const stateBefore = {
      nextMathBirthdayNumber: null,
      nextMathBirthdayFromNow: null
    };
    const action = {
      type: 'SET_DATE',
      nextMathBirthdayNumber: 10,
      nextMathBirthdayFromNow: 9
    };
    const expected = {
      nextMathBirthdayNumber: 10,
      nextMathBirthdayFromNow: 9
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    const actual = date(stateBefore, action);

    assert.deepEqual(actual, expected, message);
    assert.end();
  });
});
