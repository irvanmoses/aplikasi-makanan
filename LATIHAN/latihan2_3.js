import React, { Component } from 'react'
import {Text, StyleSheet, View} from 'react-native'

export default class latihan2_1 extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Belajar Pengembangan Aplikasi Mobile dengan <Text>React Native</Text> </Text>
      </View>
    )
  }
}
















const styles = StyleSheet.create({
    text : {
        fontSize : 20,
    }
})