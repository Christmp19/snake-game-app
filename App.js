import React from 'react';
import { SafeAreaView } from 'react-native';
import Game from './components/Game';
import './nativewind.config';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }} className='bg-green-800'>
        <Game />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}