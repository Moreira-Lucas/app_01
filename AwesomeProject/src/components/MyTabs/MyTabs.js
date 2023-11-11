
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { ListScreen } from '../Screens/ListScreen';
import { HomeScreen } from '../Screens/HomeScreen';
import { SettingsScreen } from '../Screens/SettingScreen';

const Tab = createBottomTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator   >
      <Tab.Screen 
        
        name="List"
        
        component={ListScreen}
        
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clipboard-list" />
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
            <MaterialCommunityIcons name="home" />
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
            <MaterialCommunityIcons name="cog" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};