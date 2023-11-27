//import React, { useState } from 'react';
import { TextInput, Text, View, FlatList, Button } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { MyTabs } from './src/components/MyTabs/MyTabs';
const MyTheme = {
  dark: false,
  colors: {
    primary: '#00BF63',
    background: '#f2f3f5',
    card: '#FEFEFE',
    text: '#444',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
