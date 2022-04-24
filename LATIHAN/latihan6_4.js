import React, {Component} from 'react';
import {View, Image} from 'react-native';

export default class latihan6_4 extends Component {
  constructor() {
    super();

    this.state = {
      width: 300,
      height: 0,
    };
  }

  resizeImage = e => {
    let widthOrigin = e.nativeEvent.source.width;
    let heightOrigin = e.nativeEvent.source.height;
    let aspectRatio = widthOrigin / heightOrigin;
    this.setState({
      height: this.state.width / aspectRatio,
    });
  };

  render() {
    return (
      <View style={{alignItems: 'center', margin: 20}}>
        <Image
          onLoad={this.resizeImage}
          style={{width: this.state.width, height: this.state.height}}
          source={require('../android/app/src/images/logo-mikroskil.png')}
        />
      </View>
    );
  }
}
