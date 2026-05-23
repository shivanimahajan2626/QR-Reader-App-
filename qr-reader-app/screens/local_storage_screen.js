import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {

  const storedData = {
    username: "Shivani",
    lastScanned: "https://github.com",
    savedItems: 5,
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Local Storage Data</Text>

      <View style={styles.card}>
        <Text style={styles.text}>
          Username: {storedData.username}
        </Text>

        <Text style={styles.text}>
          Last Scanned: {storedData.lastScanned}
        </Text>

        <Text style={styles.text}>
          Saved Items: {storedData.savedItems}
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

  title: {
    fontSize: 28,
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