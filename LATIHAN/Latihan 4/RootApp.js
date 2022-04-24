import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import Profile from '../Latihan 4/Profile';

const Stack = createNativeStackNavigator();

function RootApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'My Profile',
            headerStyle: {
              backgroundColor: '#6b52ae',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 15,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootApp;
