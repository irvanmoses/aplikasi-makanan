import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './Home';
import Profile from './Profile';
import Search from './Search';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeRoot() {
  <HomeStack.Navigator>
    <HomeStack.Screen
      options={{title: 'Home'}}
      name="HomeRoot"
      component={Home}
    />
    <HomeStack.Screen name="Profile" component={Profile} />
  </HomeStack.Navigator>;
}

export default class TopTab extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'ios-person' : 'ios-person';
              } else if (route.name === 'Search') {
                iconName = focused ? 'ios-search' : 'ios-search';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#a1aab8',
            tabBarStyle: {
              borderTopColor: '#fff',
              shadowColor: 'a1aab8',
              backgroundColor: '#6b52ae',
            },
          })}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
