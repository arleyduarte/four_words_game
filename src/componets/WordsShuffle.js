import React from 'react';
import {View, StyleSheet, Linking, FlatList} from 'react-native';
import {Chip} from 'react-native-paper';

const WordsShuffle = (words) => {
  const list = words.words;

  const onPressWord = (item) => {
    console.log('onPressWord', item);
    const url = `https://www.dictionary.com/browse/${item}`;
    Linking.openURL(url);
  };

  const renderChips = ({item}) => {
    const {word} = item;
    return (
      <Chip
        style={{backgroundColor: '#0278ae', margin: 3}}
        height={30}
        mode="outlined"
        textStyle={{color: 'white', fontSize: 15}}
        onPress={() => onPressWord(word)}>
        {word}
      </Chip>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderChips}
        keyExtractor={(item) => item.id}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: 150,
    margin: 20,
    flexWrap: 'wrap',
  },
  chip: {
    margin: 10,
  },
});

export default WordsShuffle;
