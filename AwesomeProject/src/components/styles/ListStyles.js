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
     
    },
    editModal:{
      backgroundColor:'#fff',
      padding:'20%',
      alignSelf:'center'
    },
    closeButton: {
     backgroundColor:'#ccc',
     opacity:0.5,
     borderRadius:50,
     margin:20,
     padding:15,
     alignSelf:'flex-end',
     
    },
    addButton:{
      backgroundColor:'#23bc9d',
      padding:10,
      borderRadius:10,
      marginBottom:20,
      

    },
    linearGradient: {
      margin:0,
      marginBottom:50,
      padding:15,
      height:'30%',
       width:'100%', 
       textAlign:'center', 
       borderRadius:20,
       justifyContent:'center',
       flexDirection:'row',

      },
      progressBar:{
        marginTop:60,
      },
      balance:{
        marginTop:5,
        color:'#fff',
        backgroundColor:'#FF5A5A',
        paddingHorizontal:5,
        padding:5,
        borderRadius:10,
        width:'50%',

      },
    textBalance:{
      fontSize:15,
      color:'#fff',
      //backgroundColor:"#fff",
      borderRadius:10,
      //paddingHorizontal:10,
      width:'50%',

    },
    amount:{
      color:'#FBFFFD',
      fontSize:50,
      fontWeight:'700',
      marginTop:5,
     // borderWidth:10,
    },
    
    cartIcon:{
      marginLeft:'20%',
      
    },
    card: {
      flexDirection:'row',
      width: '70%',
      height: 100,
      margin: 10,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#CFEDE9',
      boxShadow: '0 20px 20px rgba(0, 0, 0, 0.1)',
      
    },
    flatList: {
      width: '90%',
      
    },
    textPriceFlatlist:{
      flexDirection:'column',
       width:'90%',
       
       
    },
    textFlatlist:{
      color:'#333',
      fontSize:25,
      fontWeight:'700',
      marginBottom:10,
      
    },
    priceFlatlist:{
      color:'#333',
      fontSize:15,
      //borderWidth:1,
      borderRadius:10,
      //backgroundColor:'#1e2829',
      width:'35%',
      paddingHorizontal:10,
      
    }

  
  });
  