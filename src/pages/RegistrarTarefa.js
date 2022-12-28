import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { InputTarefa } from "../components/InputTarefa";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

export function RegistrarTarefa({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [numTasks, setNumTasks] = useState(0);
  const [tasks, setTasks] = useState([]);

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
      date,
    };

    const response = await AsyncStorage.getItem("@agenda-ddm:tasksIFRN");
    const previusData = response ? JSON.parse(response) : []; //transforma em JSON

    const data = [...previusData, newData];

    await AsyncStorage.setItem("@agenda-ddm:tasksIFRN", JSON.stringify(data));
    console.log(newData);
  }

  async function removeContact(id) {
    const response = await AsyncStorage.getItem("@agenda-ddm:tasksIFRN");
    const previusData = response ? JSON.parse(response) : []; //converte para json

    const data = previusData.filter((item) => item?.id !== id); // filtra por todos os registros que o id é diferente do id que quero deletar
    setTasks(data);
    await AsyncStorage.setItem("@agenda-ddm:tasksIFRN", JSON.stringify(data));
  }

  return (
    <View style={styles.register}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Cadastro de Tarefa</Text>
      </View>

      <View style={styles.main}>
        <InputTarefa placeholder={"Título"} onChangeText={(title) => setTitle(title)}/>
        <InputTarefa placeholder={"Descrição"} onChangeText={(description) => setDescription(description)}/>
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
