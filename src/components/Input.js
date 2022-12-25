import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
 
 
export function Input(props) {
    return (
        <View style={styles.inputArea}>
            <TextInput placeholder={props.placeholder}/>
        </View>
    )
}
 
const styles = StyleSheet.create({
    inputArea: {
        width: 260,
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingVertical: 12,
        paddingLeft: 20,
        marginBottom: 15,
    }
});
