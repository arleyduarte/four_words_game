import {RESHUFFLE_WORDS} from '../actions/types';

const INITIAL_STATE = {
  words: [],
};
export default (state = INITIAL_STATE, action) => {
  console.log('Words Reducer ', action.payload);

  switch (action.type) {
    case RESHUFFLE_WORDS:
      return action.payload;

    default:
      return state;
  }
};
