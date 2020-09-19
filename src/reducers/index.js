import {combineReducers} from 'redux';
import WordsReducer from './WordsReducer';

export default combineReducers({
  wordsReducer: WordsReducer,
});
