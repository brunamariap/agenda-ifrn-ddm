import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { InputTarefa } from "../components/InputTarefa";

export function RegistrarTarefa({ navigation }) {
  return (
    <View style={styles.register}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Cadastro de Tarefa</Text>
      </View>

      <View style={styles.main}>
        <InputTarefa placeholder={"Título"} />
        <InputTarefa placeholder={"Descrição"} />
        <InputTarefa placeholder={"Categorias"} />
        <InputTarefa placeholder={"Data"} />

        <TouchableOpacity style={styles.button}>
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
