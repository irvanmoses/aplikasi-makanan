import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native';
import {Icon, IconButton} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function Chat() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Halaman Chat</Text>
    </View>
  );
}

function Status() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Halaman Profil</Text>
    </View>
  );
}

function Panggilan() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Halaman Status</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default class TabNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarStyle: {backgroundColor: '#075E54'},
            tabBarActiveTintColor: '#fff',
            tabBarLabelStyle: {fontSize: 14, fontWeight: 'bold'},
          }}>
          <Tab.Screen name="CHAT" component={Chat} />
          <Tab.Screen name="STATUS" component={Status} />
          <Tab.Screen name="PANGGILAN" component={Panggilan} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
