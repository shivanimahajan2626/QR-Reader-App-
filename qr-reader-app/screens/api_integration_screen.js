import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {

  const apiData = {
    title: "QR Reader API",
    message: "Data fetched successfully",
    status: "200 OK",
  };

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        API Integration
      </Text>

      <View style={styles.card}>

        <Text style={styles.text}>
          Title: {apiData.title}
        </Text>

        <Text style={styles.text}>
          Message: {apiData.message}
        </Text>

        <Text style={styles.text}>
          Status: {apiData.status}
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 15,
  },

  text: {
    fontSize: 18,
    marginBottom: 15,
  },

});