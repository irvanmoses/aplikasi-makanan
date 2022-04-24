import React, { Component } from 'react'
import {Text, StyleSheet} from 'react-native'

export default class latihan2_1 extends Component {
  render() {
    return (
      <Text style={styles.text}>
          <Text>Halo kawan, </Text>
          <Text>selamat siang dan <Text> semoga hari anda menyenangkan </Text> </Text>
      </Text>
    )
  }
}
















const styles = StyleSheet.create({
    text : {
        fontSize : 20,
    }
})