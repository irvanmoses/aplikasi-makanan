import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Slider from '@react-native-community/slider';

export default class latihan7_4 extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Slider
          style={{width: 200, height: 40}}
          value={this.state.value}
          minimumValue={0}
          maximumValue={100}
          step={5}
          onValueChange={value => this.setState({value})}
        />
        <Text>Value : {this.state.value}</Text>
      </View>
    );
  }
}
