import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import { RegistrarTarefa } from "./RegistrarTarefa";

export function ListarTarefa({ navigation }) {
  const [tasks, setTasks] = useState([])

  async function atualizarDados() {
    const response = await AsyncStorage.getItem("@agenda-ddm:tasksIFRN");
    const data = response ? JSON.parse(response) : {};
    setTasks(data);
    console.log(data);
  }

  useEffect(() => {
    atualizarDados();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Agenda IFRN</Text>
      </View>
      <View>
      <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.contato}>
                <View style={styles.contentContact}>
                  <Contact id={item.id} name={item.name} phone={item.phone} />
                  <TouchableOpacity onPress={() => removeContact(item.id)}>
    
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
    height: 80,
  },
  textHeader: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
});
