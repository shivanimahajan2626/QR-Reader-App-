import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.logo}>QR Reader App</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Scan QR Code</Text>
        <Text style={styles.description}>
          Quickly scan any QR code using your mobile camera.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Barcode Scanner</Text>
        <Text style={styles.description}>
          Scan product barcodes instantly and securely.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>History</Text>
        <Text style={styles.description}>
          View all previously scanned QR codes.
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  header: {
    marginTop: 50,
    marginBottom: 30,
    alignItems: 'center',
  },

  logo: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    color: '#555',
  },
});