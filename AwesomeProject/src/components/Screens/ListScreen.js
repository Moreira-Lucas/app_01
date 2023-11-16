//import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, {useRef, useState } from 'react';
import {Modal,TouchableOpacity, FlatList, Text, View, TextInput, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NumberFormat } from 'react-intl';
import CurrencyInput from 'react-native-currency-input';
//import { Modalize } from 'react-native-modalize';

//import Icon from 'react-native-vector-icons';
//import styles from '../styles/ListStyles';

export const ListScreen = () => {

  const [data, setData] = useState([]);

  const [value, setValue] = useState('1');
  const [value2, setValue2] = useState('');
  const [edit, setEdit] = useState(false)
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };


  const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const itemSum = data.reduce((total, item) => {
    
    return eval(total + item.price);
  }, 0);
  
   // 102
  

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
      price:parseFloat(price),
      
    };


    setData([...data, newItem]);
    // Atualiza a lista
   // <Icon name="delete" size={24} color="#ff0000" />listRef.current.forceUpdate();
   
  };


  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'gray',padding:2 }}>
     <CurrencyInput
      style={{ fontSize:30,height:'10%', width:'70%', textAlign:'center', borderRadius:5}}
      value={itemSum}
      onChangeValue={setValue}
      prefix="R$ "
      delimiter="."
      separator=","
      precision={2}
      minValue={0}
      showPositiveSign
      onChangeText={(formattedValue) => {
        console.log(formattedValue); // R$ +2.310,46
      }}
    />
      <FlatList
        data={data}
        style={{ width: '90%' }}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              width: 350,
              height: 70,
              margin: 5,
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#FFF',
              boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <TextInput
              value={item.text}
              style={{ alignItems: 'flex-start', borderColor: '#ccc', borderWidth: 1 }}
              editable={edit}
            />
            <TextInput
              value={item.price.toString()}
              style={{
                alignItems: 'flex-end',
                marginLeft: '60%',
                padding: 5,
                borderColor: '#ccc',
                borderWidth: 1,
              }}
              editable={edit}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={{
                padding: 10,
                borderRadius: 10,
                marginLeft: '15%',
              }}
              onPress={() => {
                // deleteItem(item.id);
                // editItem();
                setEdit(!edit);
                console.log({ itemSum });
              }}
            >
              <MaterialCommunityIcons name="pencil-plus" size={24} color="red" style={{ backgroundColor: 'white' }} />
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
          keyboardType="numeric"
          onChange={(event) => {
            setValue2(event.nativeEvent.text);
          }}
        />
      </View>
      
      <TouchableOpacity
        onPress={() => {
          // Chame o método addItem() aqui
          //addItem(value, value2);
          onOpen();
        }}
        style={{ margin: 10, with:20 }}
      >
        <MaterialCommunityIcons name="plus-box" size={50} color="red" style={{  }} />
           
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        ></Modal>
    </View>
  );
  
  
};
