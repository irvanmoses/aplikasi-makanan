import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginTop: 15,
    fontWeight: '700',
    color: '#666',
    textAlign: 'center',
  },
  container: {
    margin: 12,
  },
  container2: {
    margin: 14,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
    borderWidth: 2,
    borderColor: 'darkgreen',
  },
  text: {
    fontSize: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: '#333',
    color: '#333',
  },
});

const DisplayNote = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Daftar Tercatat</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>Kategori</Text>
        <Text style={styles.text}>Deskripsi</Text>
        <Text style={styles.text}>Nominal</Text>
      </View>
      <View style={styles.container}>
        <Text style={{fontSize: 22, color: 'blue', fontWeight: 'bold'}}>
          Balance :
        </Text>
      </View>
    </>
  );
};

export default DisplayNote;
