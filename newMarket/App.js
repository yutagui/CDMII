import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import Market from './src/screens/market';

export default function App() {
  return (
    <View style={{flex:1}}>
      <Market/>
      <StatusBar/>
      <SafeAreaView/>
    </View>
  );
}


