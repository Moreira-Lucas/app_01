import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {Modal,TouchableOpacity, FlatList, Text, View, TextInput, Button } from 'react-native';
//import Icon from 'react-native-vector-icons';
//import styles from '../styles/ListStyles';

export const ListScreen = () => {



  const [data, setData] = useState([]);

  const [value, setValue] = useState('1');
  const [value2, setValue2] = useState('2');
  const [modalVisible, setModalVisible] = useState(false);

  /*const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };*/

  const closeModal = () => {
    // Desativa o modal
    //setModalVisible(false);
  };

  const editItem = () =>{
    //const itemEditing = data.find((item) => item.id == id);
    //console.log(itemEditing);
    //setModalVisible(true);
  };
  let newItem;
  const addItem = (text, price) => {
    
    //console.log(text,price);
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'gray',  }}>
      <FlatList
        data={data}
        //ref={listRef}
        style={{width:'90%'}}
       
        renderItem={({ item }) => (
          <View  style={{
            flexDirection: 'row',
      //width: 300,
      alignItems:'flex-end',
      height: 100,
      margin: 5,
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#FFF',
      boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
          }}>
            <TextInput value={item.text} styles={{  alignItems: 'flex-start' }} editable={true} />
            <TextInput value={item.price} styles={{ alignItems:'flex-end' }} editable={true} />
            
            <TouchableOpacity
            style={{
            backgroundColor: 'red',
            padding: 10,
            borderRadius:10,
            margin:10,
            alignItems:'center'
          }}
      onPress={() => {
        //deleteItem(item.id);
        //editItem();
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
