import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {shuffleWords, checkGrammar} from '../actions';
import {Input} from 'react-native-elements';
import {Button} from 'react-native-elements';
class ShowWords extends Component {
  state = {text: ''};

  onPressWord(item) {
    console.log('onPressWord', item);
    const url = `https://www.dictionary.com/browse/${item}`;
    Linking.openURL(url);
  }

  reshuffleOnPress() {
    console.log('reshuffleOnPress');
    this.props.shuffleWords();
  }

  checkGrammarOnPress() {
    console.log('checkGrammarOnPress');

    this.props.checkGrammar(this.state.text);
  }

  renderItem({item}) {
    const {word} = item;

    return (
      <TouchableOpacity onPress={() => this.onPressWord(word)}>
        <View style={styles.item}>
          <Text style={styles.title}>{word}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'skyblue'}} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const words = state.wordsReducer;
  console.log('mapStateToProps', words);

  return {words: words};
};
export default connect(mapStateToProps, {shuffleWords, checkGrammar})(
  ShowWords,
);

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#fff005',
    flex: 1,
  },

  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,

    height: 350,
    width: 200,
  },

  buttonContainer: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  button: {
    height: 40,
  },
  item: {
    backgroundColor: '#fff005',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
