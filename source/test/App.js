import React from 'react';
import reactDom from 'react-dom/server';
import test from 'tape';
import dom from 'cheerio';

import createApp from 'App.js';

const render = reactDom.renderToStaticMarkup;
const App = createApp(React);

test('Calendar', assert => {
  const msg = 'App should render the calendar';

  const el = <App />;
  const $ = dom.load(render(el));
  const output = $('.DayPicker').children().length;

  const actual = output > 0;
  const expected = true;

  assert.equal(actual, expected, msg);
  assert.end();
});
