import React, {Component} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    textalign: 'center',
    margin: 10,
  },
  input: {
    height: 40,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#fcfcfc',
    backgroundColor: 'rgba(0,0,0,0.1)',
    color: '#444',
    marginBottom: 10,
  },
});

export default class latihan2_1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          returnKeyType="next"
          placeholder="Masukkan Email Anda"
          placeholderTextColor="rgba(0,0,0,0.3)"
        />
      </View>
    );
  }
}
