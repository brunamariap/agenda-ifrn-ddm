import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
 
 
export function InputTarefa(props) {
    return (
        <View style={styles.inputArea}>
            <TextInput placeholder={props.placeholder} onChangeText={props.onChangeText}/>
        </View>
    )
}
 
const styles = StyleSheet.create({
    inputArea: {
        width: 280,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#B2B2B2',
        paddingVertical: 12,
        paddingLeft: 20,
        marginBottom: 15,
    }
});
