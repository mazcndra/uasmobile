// components/RoomDetailScreen.js
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function RoomDetailScreen({ route, navigation }) {
  const { room } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={room?.image} style={styles.image} />
      <View style={styles.detailBox}>
        <Text style={styles.title}>{room?.title || 'Tidak ada nama kamar'}</Text>
        <Text style={styles.price}>
          Rp. {room?.price ? room.price.toLocaleString() : 'Tidak tersedia'}
        </Text>
        <Text style={styles.label}>Fasilitas:</Text>
        <Text style={styles.text}>{room?.facilities || '-'}</Text>
        <Text style={styles.label}>Deskripsi:</Text>
        <Text style={styles.text}>{room?.description || '-'}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Kembali</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { width: '100%', height: 200 },
  detailBox: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  price: { fontSize: 18, color: 'green', marginBottom: 10 },
  label: { fontWeight: 'bold', marginTop: 10 },
  text: { marginBottom: 10, fontSize: 14 },
  button: {
    backgroundColor: '#99cc00',
    padding: 12,
    marginTop: 20,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
