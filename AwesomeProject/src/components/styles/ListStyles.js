// estilos.js

import StyleSheet from 'react-native';


const styles = StyleSheet.create( {
    container: {
      flexDirection: 'row',
      width: 300,
      height: 50,
      margin: 5,
      padding: 15,
      borderRadius: 10,
      backgroundColor: '#FFF',
      boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
    },
    text: {
      flex: 1,
      alignItems: 'flex-start',
    },
    price: {
      flex: 1,
      alignItems: 'flex-end',
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 10,
    },
  });
  