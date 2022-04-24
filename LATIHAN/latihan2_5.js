import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  textContainer: {
    textAlign: 'center',
    padding: 10,
  },
  hello: {
    fontWeight: 'bold',
    color: '#444',
    fontSize: 18,
  },
  message1: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  message2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fd7e14',
  },
});

export default class latihan2_1 extends Component {
  render() {
    return (
      <Text style={styles.textContainer}>
        <Text style={styles.hello}>Halo kawan, </Text>
        <Text style={styles.message1}>
          {' '}
          selamat siang dan
          <Text style={styles.message2}>
            {' '}
            semoga hari anda menyenangkan
          </Text>{' '}
        </Text>
      </Text>
    );
  }
}
