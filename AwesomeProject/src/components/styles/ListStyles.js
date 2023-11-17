// estilos.js
import React from 'react';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create( {
    container: {
      flex: 1, 
      alignItems: 'center',
      padding:2,
      
    },
    text: {
     
    },
    price: {
     
    },
    addButton: {
     
    },
    editButton: {
     
    },closeButton: {
     
    },
    linearGradient: {
      //flex:1,
      margin:5,
      padding:15,
      height:'20%',
       width:'100%', 
       textAlign:'center', 
       borderRadius:5,
       justifyContent:'center',
       flexDirection:'row',
      },
    textBalance:{
      fontSize:20,
      color:'#fff'
    },
    amount:{
      color:'#fff',
      fontSize:40,
      fontWeight:'700',
      marginTop:10,
    },
    
    cartIcon:{
      marginLeft:'30%',
      //borderWidth:2,
      //justifyContent:'space-around'
    },
    item: {
      flexDirection:'row',
      width: 350,
      height: 100,
      margin: 5,
      padding: 10,
      //borderWidth:1,
      borderRadius: 10,
      backgroundColor: '#FFF',
      //boxShadow: '0 20px 20px rgba(0, 0, 0, 0.1)',
      borderLeftColor:'#00BF63'
    },
    flatList: {
      width: '90%'
    },
    textPriceFlatlist:{
      flexDirection:'column',
       width:'90%',
       
    },
    textFlatlist:{
      color:'#444444',
      fontSize:25,
      fontWeight:'700',
    },
    priceFlatlist:{
      color:'#737373',
      fontSize:20
    }

  
  });
  