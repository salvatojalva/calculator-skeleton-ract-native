import React from 'react'
import {Text, StyleSheet, View} from 'react-native';

export const Operands = () => {
  return (
    <>
      <View style={styles.chain}>
        <Text style={styles.numbers}>1</Text>
        <Text style={styles.operators}>*</Text>
        <Text style={styles.numbers}>44</Text>
        <Text style={styles.operators}>/</Text>
        <Text style={styles.numbers}>643</Text>
        <Text style={styles.operators}>+</Text>
        <Text style={styles.numbers}>972</Text>
        <Text style={styles.operators}>-</Text>
        <Text style={styles.numbers}>61</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  numbers:{
    color: '#818181',
    fontSize: 22
  },
  operators:{
    fontSize: 22,
    color: "#109DFF"
  },
  chain: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 180,
    right: 40
  }
});