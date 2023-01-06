import React from 'react';
import { Animated, Pressable, StyleSheet, useWindowDimensions } from 'react-native';

import SlidesItems from '../config/products';

function AddButton(props) {
    const { width } = useWindowDimensions();
    const { addItem, scrollX, inputRange } = props;
    function handleOnPress() {
        const item = SlidesItems[(parseInt(JSON.stringify(scrollX)) / width)];
        addItem(item);
    }

    return (
        <Pressable
            style={styles.plusButtonContainer}
            onPress={handleOnPress}
        >
            <Animated.Image
                source={require('../assets/plus.png')}
                style={[
                    styles.plusButton,
                    {
                        opacity: scrollX.interpolate({
                            inputRange,
                            outputRange: [0, 1, 0],
                        }),
                    },
                ]}
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    plusButtonContainer: {
        alignItems: 'flex-end',
    },
    plusButton: {
        width: 75,
        height: 75,
        marginRight: -15,
        marginBottom: -15,
    },
});

export default AddButton;
