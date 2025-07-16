// components/AuthForm.js
import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../styles/authStyles';

export default function AuthForm({ navigation }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nama, setNama] = useState('');

  const handleSubmit = () => {
    // Simulasi validasi (bisa diganti autentikasi nyata nanti)
    if (isLogin) {
      if (email && password) {
        navigation.replace('Home'); // ke halaman beranda
      } else {
        alert('Email dan password wajib diisi');
      }
    } else {
      if (nama && email && password) {
        navigation.replace('Home'); // setelah registrasi, masuk ke home
      } else {
        alert('Semua kolom wajib diisi untuk registrasi');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>FROM LOGIN</Text>

        <View style={styles.tab}>
          <TouchableOpacity
            style={[styles.tabButton, isLogin && styles.activeTab]}
            onPress={() => setIsLogin(true)}
          >
            <Text style={isLogin ? styles.activeTabText : styles.tabText}>login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, !isLogin && styles.activeTab]}
            onPress={() => setIsLogin(false)}
          >
            <Text style={!isLogin ? styles.activeTabText : styles.tabText}>Registrasi</Text>
          </TouchableOpacity>
        </View>

        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Nama"
            value={nama}
            onChangeText={setNama}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Masukkan Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
          <Text style={styles.loginBtnText}>
            {isLogin ? 'Login' : 'Registrasi'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Belum Punya Akun?{' '}
          <Text
            style={styles.linkText}
            onPress={() => setIsLogin(!isLogin)}
          >
            Daftar Sekarang
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
