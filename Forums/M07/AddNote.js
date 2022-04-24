import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#666',
  },
  container: {
    margin: 12,
  },
  input: {
    height: 40,
    marginTop: 8,
    borderWidth: 0.3,
    borderColor: '#666',
    padding: 10,
  },
});

const AddNote = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [text, onChangeText] = useState();
  const [number, onChangeNumber] = useState();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Catatan Untuk</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Pilih Salah Satu" value="java" />
          <Picker.Item label="Pemasukan" value="pemasukan" />
          <Picker.Item label="Pengeluaran" value="pengeluaran" />
        </Picker>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Keterangan</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Masukkan Keterangan"
          keyboardType="default"
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Nominal Pemasukan</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          placeholder="Masukkan Nominal Transaksi"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.container}>
        <Button title="TAMBAH" />
      </View>
    </>
  );
};

export default AddNote;
