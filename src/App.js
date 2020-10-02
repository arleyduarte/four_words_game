import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ShowWords from './componets/ShowWords';
import reducers from './reducers';
import {Provider} from 'react-redux';

import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import WordsFrame from './componets/WordsFrame';
class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <WordsFrame />
      </Provider>
    );
  }
}

export default App;
