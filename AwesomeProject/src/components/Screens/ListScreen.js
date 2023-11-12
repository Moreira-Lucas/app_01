import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState,useRef } from 'react';
import {TouchableOpacity, FlatList, Text, View, TextInput, Button } from 'react-native';
//import Icon from 'react-native-vector-icons';
export const ListScreen = ({id0}) => {



  const [data, setData] = useState([]);

  const [value, setValue] = useState('1');
  const [value2, setValue2] = useState('2');

  const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  let newItem;
  const addItem = (text, price) => {
    
    console.log(text,price);
      newItem = {
      id: Math.random().toString(36).substring(7),
      text:text,
      price:price,
      
    };


    setData([...data, newItem]);
    // Atualiza a lista
   // <Icon name="delete" size={24} color="#ff0000" />listRef.current.forceUpdate();
   
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={data}
        //ref={listRef}
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
            <TouchableOpacity
            style={{alignItems: 'center',
            backgroundColor: 'red',
            padding: 10,
            borderRadius:10}}
      onPress={() => {
        deleteItem(item.id);
      }}
    >
      
    </TouchableOpacity>
           
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
