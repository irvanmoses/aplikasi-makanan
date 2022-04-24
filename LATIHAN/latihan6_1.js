import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

export default class latihan6_1 extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{height: 400, backgroundColor: 'powderblue'}} />
        <View style={{height: 400, backgroundColor: 'red'}} />
        <View style={{height: 400, backgroundColor: 'steelblue'}} />
      </ScrollView>
    );
  }
}
