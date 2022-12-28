import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export function ListarTarefa({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Agenda IFRN</Text>
      </View>
      <View>

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
    height: 80,
  },
  textHeader: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  }
});
