//import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, {useRef, useState } from 'react';
import {TouchableOpacity, FlatList, Text, View, TextInput, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NumberFormat } from 'react-intl';
import CurrencyInput from 'react-native-currency-input';
import Modal from "react-native-modal";
import {styles} from '../styles/ListStyles';
import {LinearGradient} from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';



//import { Modalize } from 'react-native-modalize';

//import Icon from 'react-native-vector-icons';
//import styles from '../styles/ListStyles';

export const ListScreen = () => {

  const [data, setData] = useState([
    {
      "id": "q604ba",
      "price": 5.98,
      "text": "arroz"
    },
    {
      "id": "c12345",
      "price": 2.99,
      "text": "feijão"
    },
    {
      "id": "e78901",
      "price": 12.99,
      "text": "carne"
    },
    {
      "id": "b45678",
      "price": 10.99,
      "text": "frutas"
    },
    {
      "id": "a90123",
      "price": 8.99,
      "text": "vegetais"
    },
    {
      "id": "f67890",
      "price": 3.99,
      "text": "leite"
    },
    {
      "id": "d56789",
      "price": 2.99,
      "text": "ovos"
    },
    {
      "id": "h89012",
      "price": 9.99,
      "text": "pão"
    },
    {
      "id": "g78901",
      "price": 7.99,
      "text": "queijo"
    },

  ]
  );
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState();
  const [editing, setEditing] = useState({
    textTemp:'',
    priceTemp:'',
  })
  const [modalVisible, setModalVisible] = useState();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [progress, setProgress] = useState(0.5)
  
  const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const itemSum = data.reduce((total, item) => {
    
    return total + item.price;
  }, 0);
  




   // 102
   function setItemPrice(id, formattedValue) {
    const item = data.find((item) => item.id === id);
    item.price = formattedValue;
    setData(data);
  }
  let itemX;

  const editItem = (id,editingText,editingPrice) =>{
    const itemEditing = data.find((item) => item.id == id);
   itemEditing.text = editingText;
   itemEditing.price = editingPrice;
   
    console.log(itemEditing); 
    
  };
  
  const addItem = (text, price) => {
   const   newItem = {
      id: Math.random().toString(36).substring(7),
      text:text,
      price:Number(price),
      
    };

    //setRestante(limit-itemSum);
    setData([...data, newItem]);
    // Atualiza a lista
   // <Icon name="delete" size={24} color="#ff0000" />listRef.current.forceUpdate();
   
  };


  return (
    <View style={ styles.container }>   
      <LinearGradient style={styles.linearGradient} colors={['#23bc9d','#23bc9d']}>
      <View>
      <Text style={styles.textBalance}>Total balance</Text>
      <CurrencyInput
      style={styles.amount}
      value={itemSum}
      onChangeValue={setValue}
      prefix="R$ "
      delimiter="."
      separator=","
      precision={2}
      minValue={0}
      //showPositiveSign
      onChangeText={(formattedValue) => {
        //console.log(formattedValue.toString())  // R$ +2.310,46
      }}
    />
    <Progress.Bar style={styles.progressBar} color={'#fff'} progress={progress} width={300} />
    <Text style={styles.balance}>restante R$ 0,00</Text>
    </View>
      
    <TouchableOpacity onPress={()=>{
     // editItem();
    }}>
            <MaterialCommunityIcons name="bell-ring-outline" size={24} color="#fff" />
            </TouchableOpacity>
    </LinearGradient>
      <FlatList
        data={data}
        style={styles.flatlist  }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.textPriceFlatlist}>
            <TextInput
              value={item.text}
              style={styles.textFlatlist}
              editable={false}
            />
         <CurrencyInput
            style={styles.priceFlatlist}
            value={item.price}
            onChangeValue={(formattedValue) => setItemPrice(item.id, formattedValue)}
            prefix="R$ "
            delimiter="."
            separator=","
            precision={2}
            minValue={0}
            //showNegativeSign
            onChangeText={(formattedValue) => {
              console.log(formattedValue.toString()); // R$ +2.310,46
            }}
          />
            </View>
            <View style={styles.textPriceFlatlist}>
            <TouchableOpacity
              style={{marginBottom:20,}}
              onPress={() => {
                setEditModalVisible(!editModalVisible)
                //editItem(item.id,) ;
              }}>
              <MaterialCommunityIcons name="pencil-plus" size={24} color="gray" />
            </TouchableOpacity>
            <Modal  
            backdropOpacity={0.1}
           
            isVisible={editModalVisible} >
                <View style = {styles.editModal}>
                  
                <TextInput
          style={{ padding:5,margin:10, borderWidth:1,borderColor:'#000',width:'60%',borderRadius:5 }}
          placeholder="Item"
          defaultValue={item.text}
          onChangeValue={(event) =>  itemX = event.nativeEvent.text }
          value={itemX}
        />
        <TextInput
          style={{padding:5, marginBottom: 10, borderRadius:5, borderColor:"#000",borderWidth:1,width:'60%' }}
          placeholder="Preço"
          value={item.price}
          keyboardType="numeric"
          //onChangeValue={(formattedValue) => setItemPrice(item.id, formattedValue)}
        />
                  
                  <TouchableOpacity 
                  onPress={()=>{
                    setEditModalVisible(!editModalVisible)
                    editItem(item.id,value,value);
                  }}
                  
                  ><Text >Salvar</Text></TouchableOpacity>
                </View>
            </Modal>
            <TouchableOpacity onPress={()=>{deleteItem(item.id);}}>
            <MaterialCommunityIcons name="trash-can-outline" size={24} color="gray" />
            </TouchableOpacity>
          </View>
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
        <MaterialCommunityIcons name="plus-box" size={50} color="#23bc9d"  />
           
      </TouchableOpacity>
      <Modal
       isVisible={modalVisible}

        style={{flex:1, padding:15}}>
          
          
          <View style={{backgroundColor:"#fff",  borderRadius:10, justifyContent:'center',alignItems:'center',}}>
          <TouchableOpacity
             style={styles.closeButton}
             onPress={()=>{
              setModalVisible(!modalVisible)
            }}><Text>X</Text>
            </TouchableOpacity>
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
            <TouchableOpacity 
              style={styles.addButton}
              onPress={()=>{
                addItem(value, value2);
                setModalVisible(false);
              }}>
           <Text>Adicionar</Text>

            </TouchableOpacity>           
          </View>
        </Modal>
    </View>
  );
};
