import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RoutesStack } from "./src/routes";

const Stack = createNativeStackNavigator();
const Guias = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <RoutesStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
