import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function HailstoneSequence() {
	const [number, setNumber] = useState('');
	const [result, setResult] = useState(null);

	const hailStoneSequence = () => {
		let currentNumber = number;
		const resultArray = [];
		resultArray.push(currentNumber);
		while(currentNumber > 1) {
			if(currentNumber % 2 == 0) {
				currentNumber = currentNumber / 2;
			} else{
				currentNumber = 3 * currentNumber + 1;
			}
			resultArray.push(currentNumber);
		}
		setResult(resultArray.join(' => '));
	};

	return (
		<View>
			<Text style={styles.header}>Hailstone Sequence</Text>

			<TextInput
				style={styles.input}
				value={number}
				onChangeText={setNumber}
				placeholder="Enter number"
			/>

			<Button title="Print Hailstone Sequence" onPress={hailStoneSequence} />
			
			{result ? <Text style={styles.result}>The sequence: {result}</Text> : <Text style={styles.result}></Text>}
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
		fontSize: 14,
		lineHeight: 22,
	},
});

export default HailstoneSequence;
