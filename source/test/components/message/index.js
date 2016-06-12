import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import createMessage from 'components/message';

const Message = createMessage(React);
const render = reactDom.renderToStaticMarkup;

test('Message', assert => {
  const message = 'Mathbirthday';
  const props = {
    message,
    messageClass: 'message'
  };
  const re = new RegExp(message, 'g');

  const el = <Message { ...props } />;
  const $ = dom.load(render(el));
  const output = $('.message').html();
  const actual = re.test(output);
  const expected = true;

  assert.equal(actual, expected,
    'should output the correct message text');

  assert.end();
});
