import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './Home';
import Profile from './Profile';
import Search from './Search';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  inputSearchContainer: {
    overflow: 'hidden',
    marginHorizontal: 5,
    marginRight: 100,
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.03',
  },
  inputSearch: {
    backgroundColor: '#fff',
    width: '100%',
    paddingLeft: 10,
    height: 40,
  },
});

function RootApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            title: 'Home',
            headerStyle: {
              backgroundColor: '#6b52ae',
            },
            headerTintColor: '#fff',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.push('Search')}
                style={{marginRight: 10}}>
                <Text style={{color: '#eee', fontSize: 15}}>Search</Text>
              </TouchableOpacity>
            ),
          })}
        />
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
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: 'Search',
            headerStyle: {
              backgroundColor: '#6b52ae',
            },
            headerTintColor: '#fff',
            headerTitle: props => (
              <View {...props} style={styles.inputSearchContainer}>
                <TextInput
                  style={styles.inputSearch}
                  placeholder="Search"
                  returnKeyType="search"
                  placeholderTextColor="rgba(4,4,4,0.4)"
                />
              </View>
            ),
            headerLeftContainerStyle: {
              padding: 3,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootApp;
