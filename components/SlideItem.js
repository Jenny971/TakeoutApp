import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Dimensions,
    Easing,
} from 'react-native';

const { width } = Dimensions.get('screen');

function SlideItem(props) {
    const { item, index, scrollX } = props;
    const inputRange = [
        (index - 1) * width,
        index * width,
        (index + 1) * width,
    ];

    const translateY = item.translateY
        ? scrollX.interpolate({
              inputRange,
              outputRange: item.translateY,
          })
        : 1;
    const scale = item.scale
        ? scrollX.interpolate({
              inputRange,
              outputRange: item.scale,
          })
        : 1;
    const rotate = item.rotate
        ? scrollX.interpolate({
              inputRange,
              outputRange: item.rotate,
          })
        : '0deg';
    const opacity = item.opacity
        ? scrollX.interpolate({
              inputRange,
              outputRange: item.opacity,
              easing: Easing.bezier(0.97, 0, 0.52, 0.44),
          })
        : 1;
    return (
        <View style={styles.container}>
            <Animated.Image
                source={item.img1}
                style={[
                    styles.image,
                    styles.shadowProp,
                    { opacity },
                    {
                        zIndex: 10,
                        transform: [{ scale }, { translateY }],
                    },
                ]}
            />
            <Animated.Image
                source={item.img2}
                style={[
                    styles.image,
                    styles.shadowProp,
                    {
                        transform: [{ rotate }],
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    image: {
        position: 'absolute',
        left: 0,
        top: 60,
        width: 200,
        height: 200,
        resizeMode: 'center',
        padding: 10,
    },
});

export default SlideItem;
