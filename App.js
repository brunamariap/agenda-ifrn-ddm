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
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "./src/pages/Login";
import { RegistrarTarefa } from "./src/pages/RegistrarTarefa";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListarTarefa } from "./src/pages/ListarTarefa";
import { RoutesStack } from "./src/routes";

const Stack = createNativeStackNavigator();
const Guias = createBottomTabNavigator();

export default function App() {
  return (
    /* tipos da navegação para usar 
    BottomTabNavigator
    StackNavigator */
    <NavigationContainer>
      <StatusBar style='auto' />
      <RoutesStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    width: "100%",
  },
});
