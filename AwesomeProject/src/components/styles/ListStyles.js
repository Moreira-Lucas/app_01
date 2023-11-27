// estilos.js
import React from 'react';
import {StyleSheet} from 'react-native';

const theme = {
  primaryColor:'',
  BaseColor:'#f2f3f5',
  textColorOne:'#898989',
  textColorTwo:'#000',
  
};  

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
    textInputs:{
      padding: 5,
      marginBottom: 10,
      borderRadius: 5,
      borderColor: "#000",
      borderWidth: 1,
      width: "60%",
     },
     saveButton:{
      backgroundColor:'#000',
      color:'#fff',
      padding:10,
      borderRadius:10,
     },
     closeButton:{
      alignSelf:'flex-end',
      marginBottom:10,
      icon:{
        color:'#ccc',
        fontWeight:'700',
        fontSize:16,
      },
      
     },
      borderRadius:10,
      backgroundColor:'#fff',
      padding:'5%',
      alignSelf:'center',
      width:'80%',
      justifyContent:'center',
      alignItems:'center',
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
      backgroundColor:'#000',
      color:'#fff',
      padding:10,
      borderRadius:10,
      marginBottom:20,
      

    },
    linearGradient: {
      margin:0,
      marginBottom:50,
      padding:15,
      height:'30%',
       width:'90%', 
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
        backgroundColor:'#000',
        paddingHorizontal:5,
        padding:5,
        borderRadius:10,
        width:'50%',

      },
    textBalance:{
      fontSize:15,
      color:'#000',
      borderRadius:10,
      width:'50%',

    },
    amount:{
      color:'#000',
      fontSize:50,
      fontWeight:'700',
      marginTop:5,
     // borderWidth:10,
    },
    
    cartIcon:{
      marginLeft:'20%',
      
    },
    iconCategory:{
      //borderWidth:1,
      alignItems:'center',
      justifyContent:'center',
      marginRight:10,
    },
    card: {
      flexDirection:'row',
      width: '72%',
      height: 100,
      margin: 10,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
      boxShadow: '0 20px 20px rgba(0, 0, 0, 0.1)',
      
    },
    flatList: {
      width: '90%',
      backgroundColor:'#000',
      
      
    },
    textPriceFlatlist:{
      flexDirection:'column',
       width:'80%',
       
       
    },
    textFlatlist:{
      color:'#000',
      fontSize:25,
      fontWeight:'700',
      marginBottom:10,
      
    },
    priceFlatlist:{
      color:'#fff',
      fontSize:15,
      //borderWidth:1,
      borderRadius:10,
      backgroundColor:'#000',
      width:'35%',
      paddingHorizontal:10,
      
    }

  
  });
