import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import { Keyboard } from './src/components/Keyboard';
import { Screen } from './src/components/Screen';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <Screen/>
      <Keyboard/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: '#17181A',
    flex: 1
  },
});

export default App;
