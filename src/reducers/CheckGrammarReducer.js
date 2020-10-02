import {CHECK_GRAMMAR} from '../actions/types';

const INITIAL_STATE = {text: '', errors: ''};

export default (state = INITIAL_STATE, action) => {
  console.log('CheckGrammarReducer', action.payload);
  switch (action.type) {
    case CHECK_GRAMMAR:
      return action.payload;

    default:
      return state;
  }
};
