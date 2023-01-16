import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { InputTarefa } from "../components/InputTarefa";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
//import Select from "react-select/dist/declarations/src/Select";

export function RegistrarTarefa({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [numTasks, setNumTasks] = useState(0);
  const [tasks, setTasks] = useState([]);

  /* const setCategory = (selectedOption) => c*/
  
  /* const options = [
    {'value': 'categoria1', 'label': 'Categoria1'},
    {'value': 'categoria2', 'label': 'Categoria2'},
    {'value': 'categoria3', 'label': 'Categoria3'},
  ] */

  async function atualizarDados() {
    const response = await AsyncStorage.getItem("@agenda-ddm:tasksIFRN");
    const data = response ? JSON.parse(response) : {};
    setTasks(data);
    console.log(data);
  }


  useEffect(() => {
    atualizarDados();
  }, []);
  

  async function addTask() {
    const id = uuid.v4();

    const newData = {
      id,
      title,
      description,
      category,
      date,
    };

    const response = await AsyncStorage.getItem("@agenda-ddm:tasksIFRN");
    const previusData = response ? JSON.parse(response) : [];

    const data = [...previusData, newData];

    await AsyncStorage.setItem("@agenda-ddm:tasksIFRN", JSON.stringify(data));
    console.log(newData);
  }

  return (
    <View style={styles.register}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Cadastro de Tarefa</Text>
      </View>

      <View style={styles.main}>
        <InputTarefa placeholder={"Título"} onChangeText={(title) => setTitle(title)}/>
        <InputTarefa placeholder={"Descrição"} onChangeText={(description) => setDescription(description)}/>
        {/* <Select options={options} onChange={(cetegoria) => setCategory(categoria)}/> */}
        <InputTarefa placeholder={"Data"} onChangeText={(date) => setDate(date)}/>

        <TouchableOpacity style={styles.button} onPress={addTask}>
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  register: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  textHeader: {
    color: "#1DB863",
    fontWeight: "bold",
    fontSize: 25,
  },
  button: {
    width: 260,
    backgroundColor: "#1DB863",
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "#FFFFFF",
  },
  main: {
    alignItems: "center",
  },
});
