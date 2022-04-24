import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

export default class latihan6_2 extends Component {
  render() {
    return (
      <ScrollView horizontal style={{flexDirection: 'row'}}>
        <View
          style={{width: 400, height: 400, backgroundColor: 'powderblue'}}
        />
        <View style={{width: 400, height: 400, backgroundColor: 'red'}} />
        <View style={{width: 400, height: 400, backgroundColor: 'steelblue'}} />
      </ScrollView>
    );
  }
}
