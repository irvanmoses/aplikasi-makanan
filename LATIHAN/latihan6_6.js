import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';

export default class latihan6_6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mahasiswa: [
        'John Doe',
        'Jon Snow',
        'Daenrys Targaryen',
        'Sansa Stark',
        'Tyrion Lannister',
        'Arya Stark',
      ],
    };
  }

  render() {
    return (
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={this.state.mahasiswa}
          renderItem={({item, index}) => (
            <View
              key={index}
              style={{
                padding: 10,
                borderBottomColor: '#dedede',
                borderBottomWidth: 1,
              }}>
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
