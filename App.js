import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './components/WelcomeScreen';
import AuthForm from './components/AuthForm';
import HomeScreen from './components/HomeScreen';
import RoomDetailScreen from './components/DetailRoomScreen'; // Import screen detail

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={AuthForm} options={{ title: 'Login / Registrasi' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RoomDetail" component={RoomDetailScreen} options={{ title: 'Detail Kamar' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
