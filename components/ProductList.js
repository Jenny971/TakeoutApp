import React from 'react';
import { View, StyleSheet, Image, FlatList, Animated } from 'react-native';

import SlidesItems from '../config/data';
import SlideItem from './SlideItem';

function ProductList(props) {
    return (
        <View style={styles.productContainer}>
            <Animated.Image
                style={[styles.star1]}
                source={require('../assets/star.png')}
            />
            <Image
                style={[styles.star2]}
                source={require('../assets/star.png')}
            />
            <Image
                style={[styles.star3]}
                source={require('../assets/star.png')}
            />
            <FlatList
                data={SlidesItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <SlideItem item={item} addItem={props.addItem} />
                )}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
        borderBottomColor: '#F2F1F1',
        borderBottomWidth: 3,
    },
    star1: {
        width: 10,
        height: 10,
        position: 'absolute',
        top: 115,
        left: 180,
    },
    star2: {
        width: 15,
        height: 15,
        position: 'absolute',
        top: 125,
        left: 30,
    },
    star3: {
        width: 25,
        height: 25,
        position: 'absolute',
        top: 55,
        left: 160,
    },
});

export default ProductList;
