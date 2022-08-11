import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { KeySmall } from './keyboard/KeySmall';
import { Key } from './keyboard/Key'
import { Break } from './keyboard/Break';
import { KeyNumber } from './keyboard/KeyNumber';
import { KeyBig } from './keyboard/KeyBig';

export const Keyboard = () => {
    return (
        <>
            <View style={styles.body}>
                <View style={styles.row}>
                    <View style={styles.col3}>
                        <View style={styles.container}>
                            <View style={styles.row}>
                                <KeySmall value='e' />
                                <KeySmall value='u' />
                                <KeySmall value='sin' />
                            </View>

                        </View>

                        <View style={styles.container}>
                            <View style={styles.row}>
                                <Key value='Ac' />
                                <Key value='<-' />
                                <Key value='/' bright='true' />
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.row}>
                                <KeyNumber value='1' />
                                <KeyNumber value='2' />
                                <KeyNumber value='3' />
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.row}>
                                <KeyNumber value='4' />
                                <KeyNumber value='5' />
                                <KeyNumber value='6' />
                            </View>
                        </View>
                        <View style={styles.container}>
                            <View style={styles.row}>
                                <KeyNumber value='7' />
                                <KeyNumber value='8' />
                                <KeyNumber value='9' />
                            </View>
                        </View>

                        <View style={styles.container}>
                            <View style={styles.row}>
                                <KeyBig value='0'/>
                                <KeyNumber value='.' />
                            </View>
                        </View>
                        

                    </View>
                    <View style={styles.col1}>
                        <View style={styles.container}>
                            <KeySmall value='e' />
                            <Break />
                            <Key value='*' bright='true' />
                            <Break />
                            <Key value='-' bright='true' />   
                            <Break />
                            <KeyBig value='+' bright='true' />
                            <Break />
                            <KeyBig value='=' bright='true' />
                        </View>
                    </View>
                </View>


            </View>
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        marginHorizontal: 35,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container: {
        width: "100%",
        flexDirection: 'column',
        paddingTop: 15,
        justifyContent: 'space-between'
    },
    col3: {
        width: "75%",
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    col1: {
        width: "25%",
        flexDirection: 'column',
        justifyContent: 'space-around',
    }
});