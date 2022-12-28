import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export function ListarTarefa(props){
    return (
        <View style={styles.container}>
            <View style={styles.toDo}>
                <Text style={styles.textTarefa}>{props.tarefa}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
    textTarefa: {
        color: '#FFFFFF'
    }
});