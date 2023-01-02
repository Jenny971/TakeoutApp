import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Foundation from '@expo/vector-icons/Foundation';

import colors from '../config/colors';

function ContactInfo(props) {
    return (
        <View style={styles.contactInfoContainer}>
            <View style={styles.location}>
                <Ionicons name="location-sharp" size={32} color="#FFB767" />
                <Text style={styles.info}>
                    Dongcheng District Metro Cultural Building
                </Text>
            </View>
            <Foundation name="telephone" size={35} color={colors.primary} />
        </View>
    );
}

const styles = StyleSheet.create({
    contactInfoContainer: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    location: {
        flexDirection: 'row',
        width: '60%',
    },
    info: {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: '600',
        color: '#606060',
        paddingHorizontal: 5,
    },
});

export default ContactInfo;
