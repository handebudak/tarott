import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

// Screens
import { HomeScreen } from './src/screens/HomeScreen';
import { SingleCardScreen } from './src/screens/SingleCardScreen';
import { ThreeCardScreen } from './src/screens/ThreeCardScreen';
import { CardLibraryScreen } from './src/screens/CardLibraryScreen';

// Types
import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#000' },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Ana Sayfa' }}
        />
        <Stack.Screen 
          name="SingleCard" 
          component={SingleCardScreen}
          options={{ title: 'Tek Kart Falı' }}
        />
        <Stack.Screen 
          name="ThreeCard" 
          component={ThreeCardScreen}
          options={{ title: 'Üç Kart Falı' }}
        />
        <Stack.Screen 
          name="CardLibrary" 
          component={CardLibraryScreen}
          options={{ title: 'Kart Kütüphanesi' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 