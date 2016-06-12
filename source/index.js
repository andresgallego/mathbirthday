import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import createApp, { store } from './App';

const App = createApp(React);

const mapStateToProps = state => {
  return {
    nextMathBirthdayNumber: state.nextMathBirthdayNumber,
    nextMathBirthdayFromNow: state.nextMathBirthdayFromNow
  };
};

const props = {
  title: 'Mathbirthday',
  titleClass: 'title'
};

const Mathbirthday = connect(mapStateToProps)(App);

render(
  <Provider store={store} >
    <Mathbirthday { ...props }></Mathbirthday>
  </Provider>,
  document.getElementById('root')
);
