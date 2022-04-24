import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StatusBar} from 'react-native';

// Page
import DaftarMenu from './DaftarMenu';
import DaftarPesanan from './DaftarPesanan';
import DetailMenu from './DetailMenu';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeRoot() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="DaftarMenu"
        component={DaftarMenu}
        options={{
          headerShown: true,
        }}
      />
      <HomeStack.Screen
        name="DetailMenu"
        component={DetailMenu}
        options={{
          title: 'Detail Menu',
        }}
      />
    </HomeStack.Navigator>
  );
}

const RouteApp = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'DaftarMenu') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'DaftarPesanan') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF5F00',
          tabBarInactiveTintColor: '#a1aab8',
          tabBarStyle: {
            backgroundColor: '#fff',
            padding: 10,
            height: 70,
          },
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 13,
          },
        })}>
        <Tab.Screen
          name="DaftarMenu"
          component={HomeRoot}
          options={{
            tabBarLabel: 'Daftar Menu',
            headerTitle: 'Daftar Menu',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="DaftarPesanan"
          component={DaftarPesanan}
          options={{
            tabBarLabel: 'Daftar Pesanan',
            headerTitle: 'Daftar Pesanan',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RouteApp;
