import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Operands } from './screen/Operands';
import { Result } from './screen/Result';

export const Screen = () => {
  return (
    <>
        <View style={styles.screen}>
            <Operands/>
            <Result/>
        </View>   
    </>
  )
}

const styles = StyleSheet.create({
    screen:{
        height: "40%",
        width: '100%',
    }
});