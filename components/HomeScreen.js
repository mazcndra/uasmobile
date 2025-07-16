import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    navigation.replace('Auth');
  };

  const rooms = [
    { id: 1, title: 'Hotel Kokon', image: require('../assets/kamar1.jpg'), rating: 4.9 },
    { id: 2, title: 'Hotel Sanka', image: require('../assets/kamar2.jpg'), rating: 4.8 },
    { id: 3, title: 'Hotel Selamet', image: require('../assets/kamar3.jpg'), rating: 4.7 },
    { id: 4, title: 'Hotel Jepara', image: require('../assets/kamar3.jpg'), rating: 4.6 },
    { id: 5, title: 'Hotel Indah', image: require('../assets/kamar3.jpg'), rating: 4.5 },
    { id: 6, title: 'Hotel Santika', image: require('../assets/kamar3.jpg'), rating: 4.0 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>LFT</Text>
          <Text style={styles.menu}>HOME | DETAIL ROOM | BOOKING | CONTACT</Text>
        </View>

        {/* Logout Button */}
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        {/* Hero */}
        <Image
          source={require('../assets/hotel.jpg')}
          style={styles.hero}
        />
        <Text style={styles.heroText}>SELAMAT DATANG DI HOTEL KAMI</Text>
        <TouchableOpacity style={styles.roomButton}>
          <Text style={styles.roomButtonText}>ROOMS</Text>
        </TouchableOpacity>

        {/* Horizontal Scroll Room Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.roomList}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          {rooms.map((room) => (
            <TouchableOpacity
              key={room.id}
              style={styles.card}
              onPress={() => navigation.navigate('RoomDetail', { room })}
            >
              <Image source={room.image} style={styles.roomImage} />
              <Text style={styles.roomTitle}>{room.title}</Text>
              <Text style={styles.rating}>⭐ {room.rating}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 LFT Hotels. All Rights Reserved.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#d2d8b3' },
  header: { backgroundColor: '#fff', padding: 10, alignItems: 'center' },
  logo: { fontWeight: 'bold', fontSize: 20 },
  menu: { fontSize: 12, marginTop: 5 },
  hero: { width: '100%', height: 200 },
  heroText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  roomButton: {
    backgroundColor: '#99cc00',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 20,
  },
  roomButtonText: { color: 'white', fontWeight: 'bold' },
  roomList: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    width: 130,
    alignItems: 'center',
    marginRight: 10, // Jarak antar card
  },
  roomImage: {
    width: 100,
    height: 80,
    borderRadius: 6,
  },
  roomTitle: { fontWeight: 'bold', marginTop: 5, textAlign: 'center' },
  rating: { fontSize: 12, color: '#555' },
  footer: {
    backgroundColor: '#b6745e',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: { color: 'white' },
  logoutButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#ff5252',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 5,
    margin: 10,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
