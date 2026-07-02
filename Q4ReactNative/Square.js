import React from 'react';
import {View, Text, Alert, Button} from 'react-native';
import styles from './style.js';
function ClickOnTheSquare(value) {
    Alert.alert(value)
}

export default Square = ({text}) => (
    <View style={[styles.box, {backgroundColor: "#77ce0f9"}]}>
        <Text>{text}</Text>
        <Button title='click' onPress = {() => ClickOnTheSquare(text)}></Button>
    </View>
);