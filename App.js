import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { Input } from "./src/components/Input";
import { Buttom } from "./src/components/Buttom";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes";

export default function App() {
  return (
    /* tipos da navegação para usar 
    BottomTabNavigator
    StackNavigator */
    <View style={styles.container}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Routes />
      </NavigationContainer>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image source={require("./src/img/logo.png")} />
        <Text style={styles.textHeader}>Agenda</Text>
        <Text style={styles.textHeader}>IFRN</Text>
      </View>

      <View style={styles.main}>
        <View style={styles.mainInput}>
          <Input placeholder={"Login"} />
          <Input placeholder={"Senha"} />
        </View>
        <Buttom texto={"Entrar"} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1DB863",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  header: {
    alignItems: "center",
    width: "100%",
  },
  textHeader: {
    color: "#FFFFFF",
    fontSize: 36,
  },
  button: {
    width: 260,
    backgroundColor: "#666666",
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
    justifyContent: "space-evenly",
    height: 250,
  },
  mainInput: {
    justifyContent: "space-evenly",
  },
});
