import React from 'react';
import {View, Text} from 'react-native';

const Profile = ({route, navigation}) => {
  const {nama, nohp, alamat, kota} = route.params;

  return (
    <View>
      <Text>Nama : {nama}</Text>
      <Text>No Hp : {nohp}</Text>
      <Text>Alamat : {alamat}</Text>
      <Text>Kota : {kota}</Text>
    </View>
  );
};

export default Profile;
