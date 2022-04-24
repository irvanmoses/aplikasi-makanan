import React, {Component} from 'react';
import {
  NativeBaseProvider,
  Container,
  Text,
  HStack,
  IconButton,
  Icon,
} from 'native-base';
import {StatusBar} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TobTapBar from './TopTabBar';

export default class Header extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      StatusBar.setBackgroundColor('#075E54');
    }, 100);
  }

  render() {
    return (
      <NativeBaseProvider>
        <HStack
          bg="#075E54"
          px="1"
          py="3"
          justifyContent="space-between"
          alignItems="center"
          w="100%">
          <HStack alignItems="center">
            <Text left={3} color="white" fontSize="20" fontWeight="bold">
              WhatsApp
            </Text>
          </HStack>
          <HStack right={2} alignItems="center">
            <IconButton
              icon={
                <Icon
                  size="sm"
                  as={MaterialIcons}
                  name="search"
                  color="white"
                />
              }
            />
            <IconButton
              icon={
                <Icon
                  size="sm"
                  as={MaterialIcons}
                  name="more-vert"
                  color="white"
                />
              }
            />
          </HStack>
        </HStack>
        <TobTapBar />
      </NativeBaseProvider>
    );
  }
}
