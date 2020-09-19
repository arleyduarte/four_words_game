import {RESHUFFLE_WORDS} from './types';

import data from '../../data/most_common_words.json';

const randomWordNumber = () => {
  let numberOfWords = data.commonWords.length - 1;
  return Math.floor(Math.random() * numberOfWords);
};

export const shuffleWords = () => {
  const NUMBER_OF_WORDS = 4;

  const words = new Array();

  for (let i = 0; i < NUMBER_OF_WORDS; i++) {
    const randomNumber = randomWordNumber();

    words.push({id: randomNumber, word: data.commonWords[randomNumber]});
  }

  console.log('shuffleWords', words);

  return {
    type: RESHUFFLE_WORDS,
    payload: words,
  };
};
