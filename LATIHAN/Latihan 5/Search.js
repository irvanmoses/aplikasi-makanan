import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen Search</Text>
      </View>
    );
  }
}
