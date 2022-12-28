import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export function ToDo(props){
    return (
        <View style={styles.container}>
            <View style={styles.toDo}>
                <Text style={styles.textTarefa}>{props.title}</Text>
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