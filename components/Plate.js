import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

function Plate(props) {
    const handleOnLayout = (event) => {
        const layout = event.nativeEvent.layout;
        props.getLocation(layout);
    };

    return (
        <View style={styles.plateContainer} onLayout={handleOnLayout}>
            <Image
                style={styles.plate}
                source={require('../assets/plate.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    plateContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plate: {
        width: 256,
        height: 100,
    },
});

export default Plate;
