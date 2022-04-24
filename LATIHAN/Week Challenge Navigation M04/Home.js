import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    height: 40,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.08)',
    color: '#444',
    marginBottom: 10,
  },
});

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      nohp: '',
      alamat: '',
      kota: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          returnKeyType="next"
          placeholder="Nama"
          placeholderTextColor="rgba(0,0,0,0.3)"
          keyboardType="default"
          onChangeText={value => this.setState({nama: value})}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          returnKeyType="next"
          placeholder="No Hp"
          placeholderTextColor="rgba(0,0,0,0.3)"
          keyboardType="numeric"
          onChangeText={value => this.setState({nohp: value})}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          returnKeyType="next"
          placeholder="Alamat"
          placeholderTextColor="rgba(0,0,0,0.3)"
          keyboardType="default"
          onChangeText={value => this.setState({alamat: value})}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          returnKeyType="next"
          placeholder="Kota"
          placeholderTextColor="rgba(0,0,0,0.3)"
          keyboardType="default"
          onChangeText={value => this.setState({kota: value})}
          autoCapitalize="none"
        />
        <Button
          title="Submit"
          onPress={() =>
            this.props.navigation.navigate('Profile', {
              nama: this.state.nama,
              nohp: this.state.nohp,
              alamat: this.state.alamat,
              kota: this.state.kota,
            })
          }></Button>
      </View>
    );
  }
}
