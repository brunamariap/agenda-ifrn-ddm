import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Input } from "../components/Input";

export function Login({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../img/logo.png')} />
        <Text style={styles.textHeader}>Agenda</Text>
        <Text style={styles.textHeader}>IFRN</Text>
      </View>

      <View style={styles.main}>
        <View style={styles.mainInput}>
          <Input placeholder={"Login"} />
          <Input placeholder={"Senha"} />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RotasTab')}>
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
