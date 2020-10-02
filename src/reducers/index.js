import {combineReducers} from 'redux';
import WordsReducer from './WordsReducer';
import CheckGrammarReducer from './CheckGrammarReducer';

export default combineReducers({
  wordsReducer: WordsReducer,
  checkGrammarReducer: CheckGrammarReducer,
});
