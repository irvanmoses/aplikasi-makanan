import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          title="Ke Screen Profile"
          onPress={() =>
            this.props.navigation.navigate('Profile', {nama: 'John Doe'})
          }
        />
      </View>
    );
  }
}
