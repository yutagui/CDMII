import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import Market from './src/screens/market';
import Cart from './src/screens/cart';

export default function App() {
  return (
    <View style={{flex:1}}>
      
      <StatusBar/>
      <SafeAreaView/>
      <Cart/>
    </View>
  );
}


