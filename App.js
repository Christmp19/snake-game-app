import React from 'react';
import { SafeAreaView } from 'react-native';
import Game from './components/Game';
import './nativewind.config';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <Game />
    </SafeAreaView>
  );
}