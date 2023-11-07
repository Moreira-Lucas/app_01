import React, {useState} from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ListScreen() {
  const [data, setData] = React.useState([]);

  const addItem = () => {
    const newItem = {
      id: Math.random().toString(36).substring(7),
      text: 'Novo item',
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
      <Button
        title="Adicionar item"
        onPress={addItem}
      />
    </View>
  );
}



const Tab = createBottomTabNavigator();


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}




function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}


function App() {
  const [data, setData] = useState([]);

  const addItem = () => {
    const newItem = {
      id: Math.random().toString(36).substring(7),
      text: 'Novo item',
    };

    setData([...data, newItem]);
  };

  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}


export default App;