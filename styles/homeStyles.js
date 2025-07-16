// styles/homeStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2d8b3', // warna hijau pastel latar
  },

  // Header
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#3a3a3a',
  },
  navMenu: {
    fontSize: 12,
    color: '#555',
  },

  // Hero section
  hero: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  heroText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#00000099',
    position: 'absolute',
    top: 70,
    width: '100%',
    paddingVertical: 10,
  },
  roomButton: {
    backgroundColor: '#99cc00',
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  roomButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Room card section
  roomList: {
  paddingLeft: 10,
  paddingVertical: 10,
},
card: {
  backgroundColor: 'white',
  padding: 10,
  borderRadius: 8,
  width: 180,
  marginRight: 10, // ← jarak antar kartu
  alignItems: 'center',
},

roomImage: {
  width: '100%',
  height: 100,
  borderRadius: 6,
  resizeMode: 'cover',
},


  // Footer
  footer: {
    backgroundColor: '#b6745e',
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  footerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  footerText: {
    color: 'white',
    fontSize: 12,
    marginVertical: 2,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 10,
  },

  // Logout Button
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

export default styles;
