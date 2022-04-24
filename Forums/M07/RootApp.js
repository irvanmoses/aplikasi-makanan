import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native';

import AddNote from './AddNote';
import DisplayNote from './DisplayNote';

const Tab = createBottomTabNavigator();

const RootApp = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'AddNote') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'DisplayNote') {
              iconName = focused ? 'list-circle' : 'list-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#EE4B2B',
          tabBarInactiveTintColor: '#a1aab8',
          tabBarStyle: {
            paddingBottom: 5,
            borderTopColor: '#fff',
            shadowColor: 'a1aab8',
            backgroundColor: '#fff',
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 13,
          },

          headerTintColor: 'green',
        })}>
        <Tab.Screen
          name="AddNote"
          component={AddNote}
          options={() => ({
            title: 'Tambah Catatan',
            tabBarLabel: 'Add',
          })}
        />
        <Tab.Screen
          name="DisplayNote"
          component={DisplayNote}
          options={() => ({
            title: 'Tampilkan Catatan',
            tabBarLabel: 'Display',
            headerRight: () => <Button title="HAPUS SEMUA" />,
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootApp;
