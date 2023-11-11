//import React, { useState } from 'react';
import { TextInput, Text, View, FlatList, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { FontAwesome } from '@fortawesome/fontawesome-free';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MyTabs } from './src/components/MyTabs/MyTabs';







const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
