
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { ListScreen } from '../Screens/ListScreen';
import { HomeScreen } from '../Screens/HomeScreen';
import { SettingsScreen } from '../Screens/SettingScreen';

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        
        name="List"
        
        component={ListScreen}
        
        options={{
          
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-list" color={'#008646'} size={30} />
          ),
        }}
        //icon={<FontAwesome name="list" />}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={'#008646'} size={30} />
          ),
        }}
        //icon={<FontAwesome name="house" />}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={'#008646'} size={30}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};