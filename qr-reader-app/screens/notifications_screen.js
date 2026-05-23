import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function App() {

  const [enabled, setEnabled] = useState(true);

  const showNotification = () => {
    Alert.alert(
      "Notification",
      "QR Scan Reminder Triggered Successfully!"
    );
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Notifications
      </Text>

      <View style={styles.card}>

        <Text style={styles.text}>
          Enable Notifications
        </Text>

        <Switch
          value={enabled}
          onValueChange={setEnabled}
        />

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={showNotification}
      >

        <Text style={styles.buttonText}>
          Trigger Notification
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
    marginBottom: 40,
    textAlign: 'center',
  },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 15,
    marginBottom: 30,
  },

  text: {
    fontSize: 20,
  },

  button: {
    backgroundColor: '#000',
    padding: 18,
    borderRadius: 15,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },

});