import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function MinOfThree() {
	const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [result, setResult] = useState(null);

    const findMin = () => {
        const minValue = Math.min(parseFloat(num1), parseFloat(num2), parseFloat(num3));
        setResult(minValue);
    }

	return (
		<View>
            <Text style={styles.header}>Find Minimum of 3 Numbers</Text>
            
            <TextInput
                style={styles.input}
                value={num1}
                onChangeText={setNum1}
                placeholder="Enter first number"
            />

            <TextInput
                style={styles.input}
                value={num2}
                onChangeText={setNum2}
                placeholder="Enter second number"
            />

            <TextInput
                style={styles.input}
                value={num3}
                onChangeText={setNum3}
                placeholder="Enter third number"
            />

            <Button title="Find minimum" onPress={findMin} />
            
            {result ? <Text style={styles.result}>Minimum: {result}</Text> : null}
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
		fontSize: 16,
		fontWeight: '600',
	},
});

export default MinOfThree;
