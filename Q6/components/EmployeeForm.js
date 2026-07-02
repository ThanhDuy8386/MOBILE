import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function EmployeeForm({ fullName, age, occupation }) {
	const [name, setName] = useState(fullName);
	const [employeeAge, setEmployeeAge] = useState(age);
	const [job, setJob] = useState(occupation);
	const [message, setMessage] = useState('');

	const handleUpdate = () => {
		setMessage('Update successful!');
	};

	return (
		<View>
			<Text style={styles.header}>Employee Information</Text>

			<TextInput
				style={styles.input}
				value={name}
				onChangeText={setName}
				placeholder="Enter name"
			/>

			<TextInput
				style={styles.input}
				value={employeeAge}
				onChangeText={setEmployeeAge}
				placeholder="Enter age"
			/>

			<TextInput
				style={styles.input}
				value={job}
				onChangeText={setJob}
				placeholder="Enter occupation"
			/>

			<Button title="Update" onPress={handleUpdate} />

			{message ? <Text style={styles.success}>{message}</Text> : <Text style={styles.success}>Enter employee information</Text>}
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
	note: {
		marginBottom: 12,
		color: '#6b7280',
	},
	success: {
		marginTop: 12,
		color: 'green',
		fontWeight: '600',
	},
});

export default EmployeeForm;
