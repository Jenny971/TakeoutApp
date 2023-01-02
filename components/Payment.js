import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import colors from '../config/colors';

function Payment(props) {
    return (
        <View style={styles.paymentContainer}>
            <View style={[styles.total]}>
                <Text style={styles.text}>{props.total}$</Text>
            </View>
            <View style={styles.pay}>
                <Text style={[styles.text, { color: 'white' }]}>Pay</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    paymentContainer: {
        height: 70,
        flexDirection: 'row',
    },
    total: {
        flex: 2,
        alignSelf: 'center',
        paddingLeft: 20,
    },
    pay: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 32,
        color: colors.secondary,
    },
});

export default Payment;
