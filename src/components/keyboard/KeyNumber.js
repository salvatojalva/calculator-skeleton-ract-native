import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const KeyNumber = (props) => {
    return (
        <>
            <View style={styles.bg}>
                <Text style={styles.txt}> {props.value} </Text>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#303136',
        height: 70,
        width: 70,
        borderRadius: 23,
        paddingTop: 8
    },
    txt: {
        color: "#29A8FF",
        fontSize: 35,
        fontWeight: '600',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});