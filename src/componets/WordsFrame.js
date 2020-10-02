import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import {connect} from 'react-redux';
import {shuffleWords, checkGrammar} from '../actions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faRandom, faSpellCheck} from '@fortawesome/free-solid-svg-icons';

import WordsShuffle from './WordsShuffle';
import SpellCheckView from './SpellCheckView';

const WordsFrame = (state) => {
  const [sentence, setSentence] = useState('');

  return (
    <View style={styles.container}>
      <Header
        leftComponent={
          <TouchableOpacity onPress={() => state.shuffleWords()}>
            <FontAwesomeIcon icon={faRandom} />
          </TouchableOpacity>
        }
        centerComponent={{text: 'Four Words Game', style: {color: '#fff'}}}
        rightComponent={
          <TouchableOpacity onPress={() => state.checkGrammar(sentence)}>
            <FontAwesomeIcon icon={faSpellCheck} />
          </TouchableOpacity>
        }
      />

      <TextInput
        style={styles.textInput}
        multiline={true}
        numberOfLines={15}
        onChangeText={setSentence}
        value={sentence}
      />
      <WordsShuffle words={state.words} />
      <SpellCheckView></SpellCheckView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2F8',
  },
  textInput: {
    borderColor: '#454545',
    borderWidth: 1,
    margin: 20,
    textAlignVertical: 'top',
  },
});

const mapStateToProps = (state) => {
  const words = state.wordsReducer;
  console.log('mapStateToProps', words);

  return {words: words};
};
export default connect(mapStateToProps, {shuffleWords, checkGrammar})(
  WordsFrame,
);
