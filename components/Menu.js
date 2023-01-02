import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';

function Menu(props) {
    return (
        <View style={styles.menu}>
            <Image
                style={styles.icon}
                source={require('../assets/recommend-icon.png')}
            />
            <Image
                style={styles.icon}
                source={require('../assets/burger-icon.png')}
            />
            <Image
                style={styles.icon}
                source={require('../assets/cup-icon.png')}
            />
            <Image
                style={styles.icon}
                source={require('../assets/snack-icon.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        height: 73,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    icon: {
        resizeMode: 'contain',
        width: 34,
        height: 34,
    },
});

export default Menu;
