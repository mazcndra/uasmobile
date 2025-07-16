// components/WelcomeScreen.js
import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/WelcomeStyles';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          SELAMAT DATANG DI SISTEM{'\n'}
          RESERVASI HOTEL
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Auth')}
          >
            <Text style={styles.buttonText}>Pelanggan</Text>
          </TouchableOpacity>

          <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate('AdminWelcome')}
>
  <Text style={styles.buttonText}>Admin</Text>
</TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}
