import React from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';

const DaftarPesanan = ({navigation, route}) => {
  const {name, price, image, topping, pedas} = route.params;
  return (
    <View style={styles.container}>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={image}
          style={{height: 60, width: 60, borderRadius: 30}}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>{name}</Text>
          <Text>{price}</Text>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{marginTop: 8, fontWeight: 'bold'}}>
              Topping: {topping}
            </Text>

            <Text style={{marginTop: 8, marginLeft: 14, fontWeight: 'bold'}}>
              Rasa: {pedas}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
  },
});

export default DaftarPesanan;
