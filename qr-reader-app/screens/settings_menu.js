import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Settings Menu
      </Text>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>
          Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>
          Notifications
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>
          Dark Mode
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>
          Logout
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 50,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

  menuItem: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },

  menuText: {
    fontSize: 20,
  },

});