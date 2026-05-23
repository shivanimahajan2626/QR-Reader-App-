import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>QR Code Details</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Scanned Result:</Text>

        <Text style={styles.result}>
          https://github.com/shivanimahajan2626
        </Text>

        <Text style={styles.info}>
          Type: URL
        </Text>

        <Text style={styles.info}>
          Scanned Time: 2:30 PM
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 50,
  },

  backButton: {
    marginBottom: 20,
  },

  backText: {
    fontSize: 18,
    color: 'blue',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 15,
  },

  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  result: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 15,
  },

  info: {
    fontSize: 16,
    marginBottom: 10,
  },
});