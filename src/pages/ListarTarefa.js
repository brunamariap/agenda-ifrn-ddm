import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { RegistrarTarefa } from "./RegistrarTarefa";
import { AntDesign } from "@expo/vector-icons";
import { ToDo } from "../components/ToDoList";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function ListarTarefa({ navigation }) {
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

  async function removeTask(id) {
    const response = await AsyncStorage.getItem("@agenda-ddm:tasksIFRN");
    const previusData = response ? JSON.parse(response) : []; //converte para json

    const data = previusData.filter((item) => item?.id !== id); // filtra por todos os registros que o id é diferente do id que quero deletar
    setTasks(data);
    await AsyncStorage.setItem("@agenda-ddm:tasksIFRN", JSON.stringify(data));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Agenda IFRN</Text>
      </View>
      <View>
        <ToDo />
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.containerToDo}>
              <View style={styles.toDo}>
                {/* <ToDo id={item.id} title={item.title} /> */}
                
                <ToDo id={item.id} title={item.title}/>
                
                <TouchableOpacity onPress={() => removeTask(item.id)}>
                  <AntDesign name="delete" size={24} color="#666666" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  header: {
    backgroundColor: "#1DB863",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
  },
  textHeader: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 120,
  },
  containerToDo: {
    width: 350,
    backgroundColor: "#c4c4c4",
    marginVertical: 20,
    borderRadius: 4,
    paddingVertical: 10,
  },
  toDo: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
