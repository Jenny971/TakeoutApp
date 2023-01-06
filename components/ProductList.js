import React, { useRef } from 'react';
import {
    View,
    StyleSheet,
    Animated,
    useWindowDimensions,
    Text,
    Pressable,
} from 'react-native';

import colors from '../config/colors';
import SlidesItems from '../config/products';
import stars from '../config/stars';
import AddButton from './AddButton';
import SlideItem from './SlideItem';
import Star from './Star';

function ProductList(props) {
    const { width, height } = useWindowDimensions();
    const scrollX = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.productContainer}>
            {stars.map((star, index) => {
                return (
                    <Star data={star} key={`star-${index}`} scrollX={scrollX} />
                );
            })}
            <Animated.FlatList
                data={SlidesItems}
                style={StyleSheet.absoluteFill}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <SlideItem
                        item={item}
                        index={index}
                        scrollX={scrollX}
                    />
                )}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX,
                                },
                            },
                        },
                    ],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            />
            {SlidesItems.map((item, index) => {
                const inputRange = [
                    (index - 0.5) * width,
                    index * width,
                    (index + 0.5) * width,
                ];
                return (
                    <View
                        style={styles.contentContainer}
                        key={`product-${index}`}
                    >
                        <Animated.View
                            style={[
                                styles.textContainer,
                                {
                                    opacity: scrollX.interpolate({
                                        inputRange,
                                        outputRange: [0, 1, 0],
                                    }),
                                    transform: [
                                        {
                                            translateY: scrollX.interpolate({
                                                inputRange:[
                                                    (index - 1) * width,
                                                    index * width,
                                                    (index + 1) * width,
                                                ],
                                                outputRange: [-30, 0, 30],
                                            }),
                                        },
                                    ],
                                },
                            ]}
                        >
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>{item.price}$</Text>
                        </Animated.View>
                        <AddButton scrollX={scrollX} addItem={props.addItem} inputRange={inputRange} />
                    </View>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
        paddingHorizontal: 10,
        borderBottomColor: '#F2F1F1',
        borderBottomWidth: 3,
    },
    contentContainer: {
        flex: 1,
        height: 200,
        justifyContent: 'space-between',
        position: 'absolute',
        right: 0,
        top: 50,
        paddingRight: 40,
    },
    textContainer: {
        alignItems: 'flex-end',
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
    shadowProp: {
        shadowColor: '#820E0E',
        shadowOffset: { width: 1, height: 24 },
        shadowOpacity: 0.25,
        shadowRadius: 18,
    },
});

export default ProductList;
