import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState,useRef } from 'react';
import { FlatList, Text, View, TextInput, Button, Icon } from 'react-native';

const IconDelete = () => (
  <Icon
    name="close"
    size={20}
    color="red"
  />
);



export const ListScreen = () => {
  const [data, setData] = useState([]);

  const [value, setValue] = useState('1');
  const [value2, setValue2] = useState('2');


  let newItem;

  const listRef = useRef();
  const addItem = (text, price) => {
    
    console.log(text,price);
     newItem = {
      id: Math.random().toString(36).substring(7),
      text,
      price,
      
    };


    setData([...data, newItem]);
    // Atualiza a lista
    listRef.current.forceUpdate();
  };
  const onDelete = (newItem) => {
    // Remove o item da lista
    setData(data.filter((item) => item.id !== newItem.id));
    //console.log(newItem[0].id)
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={data}
        ref={listRef}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection:'row',
              width: 300,
              height: 50,
              margin: 5,
              padding: 15,
              borderRadius: 10,
              backgroundColor: '#FFF',
              boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Text style={{ flex: 1, alignItems: 'flex-start' }}>{item.text}</Text>
            <Text style={{ flex: 1, alignItems: 'flex-end' }}>{item.price}</Text>
            <Button title='' style={{margin:0}}
             onPress={()=>{onDelete(newItem)}}
            >
              {IconDelete}
              </Button>
           
          </View>
        )}


      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          style={{ marginBottom: 10 }}
          placeholder="Item"
          onChange={(event) => {
            setValue(event.nativeEvent.text);
          }}
        />
        <TextInput
          style={{ marginBottom: 10 }}
          placeholder="Preço"
          onChange={(event) => {
            setValue2(event.nativeEvent.text);
          }}
        />
      </View>
      <Button
        title="Adicionar item"
        onPress={() => {
          // Chame o método addItem() aqui
          addItem(value, value2);
        }}
        style={{ margin: 10 }}
      />
    </View>
  );
};
