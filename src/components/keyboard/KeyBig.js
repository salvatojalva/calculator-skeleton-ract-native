import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const KeyBig = (props) => {
    return (
        <>

            <View style={[(props.bright) ? styles.bgBlue : styles.bgBlack, styles.bg]}>
                <Text style={[(props.bright) ? styles.txtBlue : styles.txtBlack, styles.txt]}> {props.value} </Text>
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    bg:{
        borderRadius: 23
    },
    txt:{
        fontSize: 35,
        fontWeight: '600',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    bgBlack: {
        height: 70,
        width: 155,
        backgroundColor: '#303136',
        paddingTop: 8
    },
    txtBlack: {
        color: "#339DFF",
    },
    bgBlue: {
        height: 110,
        width: 70,
        backgroundColor: '#005DB2',
        paddingTop: 30
    },
    txtBlue: {
        color: "#339DFF",
    }
});
