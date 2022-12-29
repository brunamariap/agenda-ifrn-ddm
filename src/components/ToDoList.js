import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function ToDo(props) {
  return (
    <View>
      <Text style={styles.textTarefa}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerToDo: {
    width: 350,
    backgroundColor: "#c4c4c4",
    marginVertical: 20,
    borderRadius: 4,
    paddingVertical: 10,
  },
  textTarefa: {
    color: "#666666",
  },
  toDo: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
