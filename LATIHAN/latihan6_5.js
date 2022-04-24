import React, {Component} from 'react';
import {View, ImageBackground} from 'react-native';

export default class latihan6_5 extends Component {
  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../android/app/src/images/walpaper.jpg')}>
        <View
          style={{
            height: 400,
            borderRadius: 10,
            marginHorizontal: 10,
            marginTop: 50,
            backgroundColor: '#fff',
          }}></View>
      </ImageBackground>
    );
  }
}
