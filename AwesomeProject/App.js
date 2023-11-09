import React, { useState } from 'react';
import { TextInput, Text, View, FlatList, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { FontAwesome } from '@fortawesome/fontawesome-free';

const ListScreen = () => {
 const [data, setData] = useState([]);


 const [value, setValue] = useState("");


  const addItem = (text) => {
    const newItem = {
      id: Math.random().toString(36).substring(7),
      text: text,
    };

    setData([...data, newItem]);
  };




  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
      <TextInput
        style={{ marginBottom: 10 }}
        placeholder="Insira um item"
        onChange={(event) => {
          setValue(event.nativeEvent.text);
        }}
      />

      <Button
        title="Adicionar item"
        onPress={()=>{addItem(value)}}
      />
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
};


const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="List"
        component={ListScreen}
        //icon={<FontAwesome name="list" />}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        //icon={<FontAwesome name="house" />}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
       // icon={<FontAwesome name="gear" />}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
