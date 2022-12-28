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
import { NavigationContainer } from "@react-navigation/native";
import { RegistrarTarefa } from "./pages/RegistrarTarefa";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListarTarefa } from "./pages/ListarTarefa";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./pages/Login";

const Guias = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export function RoutesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Registrar"
        component={Routes}
        options={{ title: "Registrar Tarefa" }}
      />
    </Stack.Navigator>
  );
}

export function Routes() {
  return (
    <Guias.Navigator>
      <Guias.Screen
        name="Register"
        component={RegistrarTarefa}
        options={{ title: "Registrar Tarefa" }}
      />
      <Guias.Screen
        name="Listar"
        component={ListarTarefa}
        options={{ title: "Listar Tarefas" }}
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
