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

  const [data, setData] = useState([]);
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState();
  const [edit, setEdit] = useState(false)
  const [modalVisible, setModalVisible] = useState();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [progress, setProgress] = useState(0.5)
  
  //const modalizeRef = useRef(null);

  /*const onOpen = () => {
    modalizeRef.current?.open();
  };*/

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
  

  const editItem = (id) =>{
    const itemEditing = data.find((item) => item.id == id);
    console.log(itemEditing);
    setEdit(!edit);
    setEditModalVisible(true);

  };
  
  const addItem = (text, price) => {
   const   newItem = {
      id: Math.random().toString(36).substring(7),
      text:text,
      price:Number(price),
      
    };


    setData([...data, newItem]);
    // Atualiza a lista
   // <Icon name="delete" size={24} color="#ff0000" />listRef.current.forceUpdate();
   
  };


  return (
    <View style={ styles.container }>
       
      <LinearGradient style={styles.linearGradient} colors={['#1e2829','#1e2829']}>
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
    <Progress.Bar progress={progress} width={200} />
    </View>
      
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
              editable={edit}
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
                setEdit(!edit);
                editItem(item.id) ;
              }}>
              <MaterialCommunityIcons name="pencil-plus" size={24} color="#00BF63" />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{deleteItem(item.id);}}>
            <MaterialCommunityIcons name="trash-can-outline" size={24} color="red" />
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
        <MaterialCommunityIcons name="plus-box" size={50} color="#008646"  />
           
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
            <MaterialCommunityIcons name="plus-box" size={50} color="#008646"/>

            </TouchableOpacity>  
            <TouchableOpacity
             style={{alignItems:'flex-start'}}
             onPress={()=>{
              setModalVisible(!modalVisible)
            }}><Text style={{alignSelf:'flex-end'}}>X</Text></TouchableOpacity>
          </View>
        </Modal>

    </View>
  );
};
