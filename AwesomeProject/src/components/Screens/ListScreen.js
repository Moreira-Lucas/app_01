//import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useRef, useState } from "react";
import {
  TouchableOpacity,
  FlatList,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NumberFormat } from "react-intl";
import CurrencyInput from "react-native-currency-input";
import Modal from "react-native-modal";
import { styles } from "../styles/ListStyles";
import { LinearGradient } from "expo-linear-gradient";
import * as Progress from "react-native-progress";

export const ListScreen = () => {
  const [data, setData] = useState([
    {
      id: "q604ba",
      price: 5.98,
      text: "Arroz",
    },
    {
      id: "c12345",
      price: 2.99,
      text: "Feijão",
    },
  ]);
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState();
  const [editing, setEditing] = useState({
    textTemp: "",
    priceTemp: "",
  });
  const [modalVisible, setModalVisible] = useState();
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [progress, setProgress] = useState(0.5);



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
  let itemX,itemY;

  const editItem = (id, editingText, editingPrice) => {
    const itemEditing = data.find((item) => item.id == id);
    itemEditing.text = editingText;
    itemEditing.price = editingPrice;

    console.log(itemEditing);
  };

  const addItem = (text, price) => {
    const newItem = {
      id: Math.random().toString(36).substring(7),
      text: text,
      price: Number(price),
    };

    //setRestante(limit-itemSum);
    setData([...data, newItem]);
    
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linearGradient}
        colors={["#fff", "#fff"]}
      >
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
          <Progress.Bar
            style={styles.progressBar}
            color={"#000"}
            progress={progress}
            width={300}
          />
          <Text style={styles.balance}> restante R$ 0,00 </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            // editItem();
          }}
        >
          <MaterialCommunityIcons
            name="bell-ring-outline"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>
      </LinearGradient>
      <FlatList
        data={data}
        style={styles.flatlist}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.iconCategory}>
            <MaterialCommunityIcons name="food-variant" size={50}  color="green" />
            </View>
            <View style={styles.textPriceFlatlist}>
              <TextInput
                value={item.text}
                style={styles.textFlatlist}
                editable={false}
              />
              <CurrencyInput
                style={styles.priceFlatlist}
                value={item.price}
                onChangeValue={(formattedValue) =>
                  setItemPrice(item.id, formattedValue)
                }
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
                style={{ marginBottom: 20 }}
                onPress={() => {
                  setEditModalVisible(!editModalVisible);
                  //editItem(item.id,) ;
                }}
              >
                <MaterialCommunityIcons
                  name="pencil-plus"
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
              <Modal backdropOpacity={0.1} isVisible={editModalVisible}>
                <View style={styles.editModal}>
                  <TouchableOpacity 
                  style={styles.editModal.closeButton}
                  onPress={()=>{
                    setEditModalVisible(!editModalVisible);;
                  }}
                  >
                    <Text style={styles.editModal.closeButton.icon}>X</Text>
                  </TouchableOpacity>
                  
                  <TextInput
                    style={styles.editModal.textInputs}
                    placeholder="Item"
                    defaultValue={item.text}
                    onChangeValue={(event) => (itemX = event.nativeEvent.text)}
                    value={itemX}
                  />
                  <TextInput
                    style={styles.editModal.textInputs}
                    placeholder="Preço"
                    defaultValue={item.price}
                    onChangeValue={(event) => (itemY = event.nativeEvent.text)}
                    value={itemY}
                    keyboardType="numeric"
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setEditModalVisible(!editModalVisible);
                      editItem(item.id, itemX, value2);
                    }}
                  >
                    <Text style={styles.editModal.saveButton} >Salvar</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
              <TouchableOpacity
                onPress={() => {
                  deleteItem(item.id);
                }}
              >
                <MaterialCommunityIcons
                  name="trash-can-outline"
                  size={24}
                  color="gray"
                />
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
        style={{ margin: 10, with: 20 }}
      >
        <MaterialCommunityIcons name="plus-box" size={50} color="#000" />
      </TouchableOpacity>
      <Modal isVisible={modalVisible} style={{ flex: 1, padding: 15 }}>
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text>X</Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              borderColor: "red",
            }}
          >
            <TextInput
              style={{
                padding: 5,
                margin: 10,
                borderWidth: 1,
                borderColor: "#000",
                width: "60%",
                borderRadius: 5,
              }}
              placeholder="Item"
              onChange={(event) => {
                setValue(event.nativeEvent.text);
              }}
            />
            <TextInput
              style={{
                padding: 5,
                marginBottom: 10,
                borderRadius: 5,
                borderColor: "#000",
                borderWidth: 1,
                width: "60%",
              }}
              placeholder="Preço"
              keyboardType="numeric"
              onChange={(event) => {
                setValue2(event.nativeEvent.text);
              }}
            />
          </View>
          <TouchableOpacity
            
            onPress={() => {
              addItem(value, value2);
              setModalVisible(false);
            }}
          >
            <Text style={styles.addButton}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};
