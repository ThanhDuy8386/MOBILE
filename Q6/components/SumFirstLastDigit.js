import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function SumFirstLastDigit() {
	const [value, setValue] = useState('');
    const [result, setResult] = useState(0);
    const sumFunction = () => {
        const digit = String(value);
        const firstDigit = parseInt(digit[0]);
        const lastDigit = parseInt(digit[digit.length - 1]);
        setResult(firstDigit + lastDigit);
    }

    return (
        <View>
            <Text style={styles.header}>Sum of First and Last Digit</Text>

            <TextInput
                style={styles.input}
                value={value}
                onChangeText={setValue}
                placeholder="Enter number"
            />

            <Button title="Calculate" onPress={sumFunction} />
            
            {result ? <Text style={styles.result}>Sum of first and last digit: {result}</Text> : <Text style={styles.result}></Text>}
        </View>
    );
}

const styles = StyleSheet.create({
	header: {
		fontSize: 18,
		fontWeight: '700',
		marginBottom: 12,
	},
	input: {
		borderWidth: 1,
		borderColor: '#d1d5db',
		borderRadius: 8,
		padding: 10,
		marginBottom: 10,
	},
	result: {
		marginTop: 12,
		color: 'green',
		fontWeight: '600',
	},
});

export default SumFirstLastDigit;
