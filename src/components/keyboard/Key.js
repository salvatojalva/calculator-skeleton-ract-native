import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
export const Key = (props) => {
    return (
        <>

            <View style={[(props.bright) ? styles.bgBlue: styles.bgGray, styles.bg]}> 
                <Text style={[(props.bright) ? styles.txtBlue: styles.txtGray, styles.txt]}> {props.value} </Text> 
            </View>
            
        </>
    )
}

const styles = StyleSheet.create({
    bg:{
        height: 70,
        width: 70,
        borderRadius: 23,
        paddingTop: 8
    },
    txt:{
        fontSize: 35,
        fontWeight: '600',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    bgGray: {
        backgroundColor: '#616161',  
    },
    txtGray: {
        color: "#A5A5A5",
    },
    bgBlue: {
        backgroundColor: '#005DB2',
    },
    txtBlue: {
        color: "#339DFF",
    }
});