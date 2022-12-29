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
import { RegistrarTarefa } from "./pages/RegistrarTarefa";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListarTarefa } from "./pages/ListarTarefa";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./pages/Login";
import { FontAwesome5 } from "@expo/vector-icons";

const Guias = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function RoutesStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="RotasTab"
        component={Routes}
      />
    </Stack.Navigator>
  );
}

export function Routes() {
  return (
    <Guias.Navigator screenOptions={{headerShown: false}}>
      <Guias.Screen
        name="Register"
        component={RegistrarTarefa}
        options={{ title: "Registrar Tarefa", tabBarIcon: ({}) => <FontAwesome5 name="calendar-check" size={24} color="black" /> }}
      />
      <Guias.Screen
        name="Listar"
        component={ListarTarefa}
        options={{ title: "Listar Tarefas", tabBarIcon: ({}) => <FontAwesome5 name="list-ul" size={24} color="black" /> }}
      />
    </Guias.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
});
