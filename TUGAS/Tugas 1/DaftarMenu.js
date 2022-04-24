import React from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';

import categories from './categories';

const DaftarMenu = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: '#444',
              fontWeight: 'bold',
              fontFamily: 'Poppins-Bold',
            }}>
            Halo Irvan,
          </Text>
          <Text style={{fontSize: 15, marginTop: 4}}>
            Mau makan apa sekarang?
          </Text>
        </View>
        <View>
          <Image
            source={require('../../assets/images/user.jpg')}
            style={{height: 50, width: 50, borderRadius: 30}}
          />
        </View>
      </View>

      {categories.map(category => (
        <View style={styles.box} key={categories.id}>
          <Image
            source={category.image}
            style={{height: 200, width: '100%', borderRadius: 15}}
          />
          <View style={styles.details}>
            <View>
              <Text style={{fontSize: 18, color: '#222', fontWeight: 'bold'}}>
                {category.name}
              </Text>
              <Text style={{fontSize: 16, marginTop: 4}}>{category.price}</Text>
            </View>
            <View>
              <Button
                title="Pesan"
                onPress={() =>
                  navigation.navigate('DetailMenu', {
                    name: category.name,
                    price: category.price,
                    image: category.image,
                  })
                }
              />
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  box: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    padding: 10,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: 12,
  },
  button: {
    backgroundColor: '#FF5F00',
    padding: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default DaftarMenu;
