import React, {Component} from 'react';
import {View, Image} from 'react-native';

export default class latihan6_3 extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', margin: 20}}>
        <Image
          style={{width: 300, height: 300}}
          source={require('../android/app/src/images/logo-mikroskil.png')}
        />
      </View>
    );
  }
}
