import React from 'react';
import { Animated, StyleSheet, useWindowDimensions } from 'react-native';

function Star(props) {
    const { data, scrollX } = props;
    const { width } = useWindowDimensions();
    const inputRange = [0, width, 2 * width];

    return (
        <Animated.Image
            source={require('../assets/star.png')}
            style={[
                styles.star,
                {
                    width: data.size,
                    height: data.size,
                    transform: [
                        {
                            translateX: scrollX.interpolate({
                                inputRange,
                                outputRange: data.outputRangeX,
                            }),
                        },
                        {
                            translateY: scrollX.interpolate({
                                inputRange,
                                outputRange: data.outputRangeY,
                            }),
                        },
                    ],
                },
            ]}
        />
    );
}

const styles = StyleSheet.create({
    star: {
        position: 'absolute',
        zIndex: 10,
    },
});

export default Star;
