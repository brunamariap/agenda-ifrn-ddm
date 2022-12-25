import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
 
 
export function Buttom(props) {
    <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>{props.texto}</Text>
    </TouchableOpacity>
}
 
const styles = StyleSheet.create({
    button: {
        width: 260,
        backgroundColor: '#666666',
        borderRadius: 5,
    },
    textButton: {
        color: '#FFFFFF'
    }
});
