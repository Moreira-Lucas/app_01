//import React, { useState } from 'react';
import { TextInput, Text, View, FlatList, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './src/components/MyTabs/MyTabs';







const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
