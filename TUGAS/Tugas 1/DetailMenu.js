import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  Pressable,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const DetailMenu = ({navigation, route}) => {
  const {name, price, image} = route.params;
  const [topping, setSelectedTopping] = useState();
  const [pedas, setPedas] = useState();

  return (
    <ScrollView style={styles.container}>
      <View>
        <Image
          source={image}
          style={{height: 200, width: '100%', borderRadius: 15}}
        />
        <Text
          style={{
            fontSize: 20,
            color: '#222',
            fontWeight: 'bold',
            marginTop: 12,
          }}>
          {name}
        </Text>
        <Text style={{fontSize: 18, marginTop: 4}}>{price}</Text>
      </View>

      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>Pilih Topping:</Text>
        <Picker
          selectedValue={topping}
          onValueChange={item => setSelectedTopping(item)}>
          <Picker.Item label="Pilih Salah Satu" value="" />
          <Picker.Item label="Perkedel" value="Perkedel" />
          <Picker.Item label="Tempe" value="Tempe" />
          <Picker.Item label="Telur Dadar" value="Telur dadar" />
          <Picker.Item label="Telur Bulat" value="Telur bulat" />
          <Picker.Item label="Telur Mata Sapi" value="Telur mata sapi" />
          <Picker.Item label="Kerupuk" value="Kerupuk" />
        </Picker>

        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 20}}>
          Rasa
        </Text>
        <Picker selectedValue={pedas} onValueChange={item => setPedas(item)}>
          <Picker.Item label="Pilih Salah Satu" value="" />
          <Picker.Item label="Tidak Pedas" value="Tidak Pedas" />
          <Picker.Item label="Pedas" value="Pedas" />
        </Picker>
      </View>

      <View style={{marginTop: 15}}>
        <Button
          title="Pesan Sekarang"
          onPress={() =>
            navigation.navigate('DaftarPesanan', {
              name: name,
              price: price,
              image: image,
              topping: topping,
              pedas: pedas,
            })
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
  },
});

export default DetailMenu;
