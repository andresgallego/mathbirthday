import test from 'tape';

import { timeDiff } from 'App';

test('Date', nest => {
  nest.test('...timeDiff', assert => {
    const message = `should calculate difference between dates`;

    const expected = 3;

    const actual = timeDiff('11/16/1985', '11/13/1985');

    assert.deepEqual(actual, expected, message);
    assert.end();
  });
});
