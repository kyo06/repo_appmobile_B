import React from 'react';
import {View} from 'react-native';
import Header from './components/Header';
import Form from './components/From';

export default function App() {

  return (
    <View style={{ marginVertical: 40, marginHorizontal: 20 }}>
      <Header/>
      <Form/>
    </View>
  );
}
