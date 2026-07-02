import React from 'react';
import HailstoneSequence from './components/HailstoneSequence';
import EmployeeForm from './components/EmployeeForm';
import MinOfThree from './components/MinOfThree';
import SumFirstLastDigit from './components/SumFirstLastDigit';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>My Awesome App</Text>
        <View style={styles.card}>
          <EmployeeForm fullName={"ThanhDuy"} age={18} occupation={"Student"} />
        </View>
        <View style={styles.card}>
          <MinOfThree />
        </View>
        <View style={styles.card}>
          <SumFirstLastDigit />
        </View>
        <View style={styles.card}>
          <HailstoneSequence />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 50,
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
});

export default App;