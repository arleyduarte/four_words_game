import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import {shuffleWords} from '../actions';

class ShowWords extends Component {
  onPressWord(item) {
    console.log('onPressWord', item);
    const url = `https://www.dictionary.com/browse/${item}`;
    Linking.openURL(url);
  }

  reshuffleOnPress() {
    console.log('reshuffleOnPress');
    this.props.shuffleWords();
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
      <View style={styles.mainContainer}>
        <View style={styles.listContainer}>
          <FlatList
            data={this.props.words}
            renderItem={this.renderItem.bind(this)}
            keyExtractor={(word) => word.id}></FlatList>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="re shuffle"
            onPress={() => this.reshuffleOnPress()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const words = state.wordsReducer;
  console.log('mapStateToProps', words);

  return {words: words};
};
export default connect(mapStateToProps, {shuffleWords})(ShowWords);

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flex: 0,
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
