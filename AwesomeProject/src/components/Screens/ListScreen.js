//import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, {useRef, useState } from 'react';
import {TouchableOpacity, FlatList, Text, View, TextInput, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NumberFormat } from 'react-intl';
import CurrencyInput from 'react-native-currency-input';
import Modal from "react-native-modal";
//import { Modalize } from 'react-native-modalize';

//import Icon from 'react-native-vector-icons';
//import styles from '../styles/ListStyles';

export const ListScreen = () => {

  const [data, setData] = useState([]);

  const [value, setValue] = useState('1');
  const [value2, setValue2] = useState('');
  const [edit, setEdit] = useState(false)
  const [modalVisible, setModalVisible] = useState();
  //const modalizeRef = useRef(null);

  /*const onOpen = () => {
    modalizeRef.current?.open();
  };*/


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
    <View style={{ flex: 1, alignItems: 'center',padding:2,backgroundColor:'#fff' }}>
     <CurrencyInput
      style={{ fontSize:30,fontWeight:'700',height:'10%', width:'70%', textAlign:'center', borderRadius:5}}
      value={itemSum}
      onChangeValue={setValue}
      prefix="R$ "
      delimiter="."
      separator=","
      precision={2}
      minValue={0}
      //showPositiveSign
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
              //flexDirection: 'row',
              flexDirection:'row',
              width: 350,
              height: 70,
              margin: 5,
              padding: 10,
              //borderWidth:1,
              borderRadius: 10,
              backgroundColor: '#FFF',
              boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <View style={{ flexDirection:'column', width:'90%'}}>
            <TextInput
              value={item.text}
              style={{ fontSize:16, fontWeight:'700',color:'#000' }}
              editable={edit}
            />
            <TextInput
              value={item.price.toString()}
              style={{
                padding: 5,
                color:'red',
               // borderColor: '#ccc',
                //borderWidth: 1,
              }}
              editable={edit}
              keyboardType="numeric"
            />
            </View>
            
            <TouchableOpacity
              style={{
                
                //padding: 10,
                borderRadius: 10,
                //marginLeft: '15%',
                
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
     
      
      <TouchableOpacity
        onPress={() => {
          // Chame o método addItem() aqui
          //addItem(value, value2);
          setModalVisible(!modalVisible);
        }}
        style={{ margin: 10, with:20 }}
      >
        <MaterialCommunityIcons name="plus-box" size={50} color="red"  />
           
      </TouchableOpacity>
      <Modal
       isVisible={modalVisible}

        //style={{flex:1, padding:15}}
        >
          <View style={{backgroundColor:"#fff",  borderRadius:10, justifyContent:'center',alignItems:'center',}}>
          <View style={{  justifyContent: 'center', alignItems: 'center', width:'100%', borderColor:'red',  }}>
        <TextInput
          style={{ padding:5,margin:10, borderWidth:1,borderColor:'#000',width:'60%',borderRadius:5 }}
          placeholder="Item"
          onChange={(event) => {
            setValue(event.nativeEvent.text);
          }}
        />
        <TextInput
          style={{padding:5, marginBottom: 10, borderRadius:5, borderColor:"#000",borderWidth:1,width:'60%' }}
          placeholder="Preço"
          keyboardType="numeric"
          onChange={(event) => {
            setValue2(event.nativeEvent.text);
          }}
        />
      </View>
           

            <TouchableOpacity onPress={()=>{
              addItem(value, value2);
              setModalVisible(false);
            }}>
            <MaterialCommunityIcons name="plus-box" size={50} color="red"/>

            </TouchableOpacity>  
            <TouchableOpacity
             style={{alignItems:'flex-start'}}
             onPress={()=>{
              setModalVisible(!modalVisible)
            }}><Text>X</Text></TouchableOpacity>


          </View>
        </Modal>
    </View>
  );
  
  
};
