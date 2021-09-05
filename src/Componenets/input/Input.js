import React from 'react'
import { Text, View,TextInput } from 'react-native';
import Styles from './Input.styles'
function Input() {
    return (
        <View style={Styles.conteiner}>
            <TextInput style={Styles.textInput} placeholder="Ara.."></TextInput>
        </View>
    )
}

export default Input
