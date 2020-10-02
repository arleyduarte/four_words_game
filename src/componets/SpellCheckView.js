import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';

class SpellCheckView extends Component {
  render() {
    console.log('SpellCheckView', this.props);
    return (
      <View style={styles.container}>
        <Text>{this.props.error}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    height: 150,
    margin: 20,
    flexWrap: 'wrap',
  },
});
const mapStateToProps = (state) => {
  console.log('SpellCheckView mapStateToProps', state.checkGrammarReducer);

  const {errors} = state.checkGrammarReducer;

  let error = 'NA';
  if (errors) {
    const errorArray = errors.map((item) => {
      return `- bad: ${item.bad}  better: ${item.better[0]} \n`;
    });

    error = errorArray.join(',');
  }

  console.log('SpellCheckView mapStateToProps result2', error);
  return {error};
};
export default connect(mapStateToProps, {})(SpellCheckView);
