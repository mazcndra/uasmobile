// styles/authStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2d8b3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 24,
    width: 300,
    borderRadius: 12,
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 16,
  },
  tab: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeTab: {
    backgroundColor: '#6aa9c4',
  },
  tabText: {
    color: 'black',
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  loginBtn: {
    width: '100%',
    backgroundColor: '#6aa9c4',
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 10,
  },
  loginBtnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 12,
    fontSize: 12,
    color: '#333',
  },
  linkText: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
});

export default styles;
