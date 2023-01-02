import React, { useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    Pressable,
    Animated,
} from 'react-native';

const { width, height } = Dimensions.get('screen');
import colors from '../config/colors';

function SlideItem(props) {
    const { item, addItem } = props;
    return (
        <View style={styles.container}>
            <Animated.Image
                source={item.img}
                style={[styles.image, styles.shadowProp]}
            />
            <View style={styles.contentContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>{item.price}$</Text>
                </View>
                <Pressable
                    style={styles.plusButtonContainer}
                    onPress={() => addItem(item)}
                >
                    <Image
                        source={require('../assets/plus.png')}
                        style={styles.plusButton}
                    />
                </Pressable>
            </View>
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
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'center',
        padding: 10,
    },
    contentContainer: {
        justifyContent: 'space-between',
        height: '100%',
        padding: 40,
    },
    textContainer: {
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    name: {
        fontSize: 32,
        fontWeight: '600',
        color: colors.primary,
    },
    price: {
        fontSize: 18,
        color: colors.primary,
    },
    plusButtonContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
    },
    plusButton: {
        width: 75,
        height: 75,
        marginRight: -15,
        marginBottom: -15,
    },
    shadowProp: {
        shadowColor: '#820E0E',
        shadowOffset: { width: 1, height: 15 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
    },
});

export default SlideItem;
