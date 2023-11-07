import * as React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';


const HomeScreen =()=> {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  const SettingsScreen=()=> {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  


const Tab = createBottomTabNavigator();


const MyTabs =()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Settings" component={SettingsScreen}/>
        </Tab.Navigator>
    )

}

export default MyTabs;