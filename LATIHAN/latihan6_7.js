import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Image, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default class latihan6_7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          image: require('../android/app/src/images/spiderman.jpg'),
          width: '100%',
          height: 1,
        },
        {
          image: require('../android/app/src/images/black-panther.jpg'),
          width: '100%',
          height: 1,
        },
        {
          image: require('../android/app/src/images/endgame.jpg'),
          width: '100%',
          height: 1,
        },
      ],
    };
  }

  resizeImageKeepAspectRatio = (e, i) => {
    let widthScreen = Dimensions.get('window').width;
    let widthOrigin = e.nativeEvent.source.width;
    let heightOrigin = e.nativeEvent.source.height;
    let aspectRatio = widthOrigin / heightOrigin;
    var items = this.state.images;
    items[i].width = widthScreen;
    items[i].height = widthScreen / aspectRatio;
    this.setState({
      images: items,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex: 1}}
          keyExtractor={(item, index) => index.toString()}
          data={this.state.images}
          renderItem={({item, index}) => (
            <Image
              key={index}
              onLoad={e => this.resizeImageKeepAspectRatio(e, index)}
              style={{width: item.width, height: item.height}}
              source={item.image}
            />
          )}
        />
      </View>
    );
  }
}
