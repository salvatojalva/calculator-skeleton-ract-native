import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Result = () => {
    return (
        <>
            <View style={styles.chain}>
                <Text style={styles.numbers}>=12,3323.33</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    numbers: {
        color: '#FFFFFF',
        fontSize: 45
    },
    chain: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 60,
        right: 40
    }
});