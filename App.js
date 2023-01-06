import { useRef, useState } from 'react';
import { StyleSheet, View, Animated, useWindowDimensions } from 'react-native';
import ContactInfo from './components/ContactInfo';
import Menu from './components/Menu';
import Payment from './components/Payment';
import Plate from './components/Plate';
import ProductList from './components/ProductList';

export default function App() {
    const [total, setTotal] = useState(0);
    const [plateItems, setPlateItems] = useState([]);
    const [location, setLocation] = useState({});
    const { height, width } = useWindowDimensions();

    const translation1 = useRef(
        new Animated.ValueXY({ x: width, y: height })
    ).current;
    const translation2 = useRef(
        new Animated.ValueXY({ x: width, y: height })
    ).current;
    const translation3 = useRef(
        new Animated.ValueXY({ x: width, y: height })
    ).current;

    function getLocation(layout) {
        setLocation(layout);
        translation1.x.setValue(layout.width - 140);
        translation1.y.setValue(layout.y - 150);
        translation2.x.setValue(layout.width - 140);
        translation2.y.setValue(layout.y - 150);
        translation3.x.setValue(layout.width - 140);
        translation3.y.setValue(layout.y - 150);
    }

    const addItem = (item) => {
        if (!plateItems.includes(item.name)) {
            setTotal(total + item.price);
            setPlateItems([...plateItems, item.name]);

            let temp, x, y;
            switch (item.id) {
                case 1:
                    temp = translation1;
                    x = Math.floor(location.width / 2);
                    y = location.y + Math.floor(location.height / 4);
                    break;
                case 2:
                    temp = translation2;
                    x = Math.floor(location.width / 2) - 50;
                    y = location.y + Math.floor(location.height / 10);
                    break;
                case 3:
                    temp = translation3;
                    x = Math.floor(location.width / 4);
                    y = location.y + Math.floor(location.height / 3);
                    break;
            }
            Animated.parallel([
                Animated.timing(temp.x, {
                    toValue: x,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(temp.y, {
                    toValue: y,
                    duration: 500,
                    useNativeDriver: true,
                }),
            ]).start();
        }
    }

    return (
        <View style={styles.container}>
            <Menu />
            <View style={{ flex: 1, backgroundColor: '#FFEDED' }}>
                <Animated.Image
                    source={require('./assets/fries.png')}
                    style={[
                        styles.image,
                        {
                            transform: [
                                { translateX: translation1.x },
                                { translateY: translation1.y },
                                { rotate: '-21.06deg' },
                                {
                                    scale: translation1.x.interpolate({
                                        inputRange: [
                                            Math.floor(width / 2),
                                            width - 150,
                                        ],
                                        outputRange: [1.2, 0],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        },
                    ]}
                />
                <Animated.Image
                    source={require('./assets/coffee.png')}
                    style={[
                        styles.image,
                        {
                            zIndex: 400,
                            transform: [
                                { translateX: translation2.x },
                                { translateY: translation2.y },
                                {
                                    scale: translation2.x.interpolate({
                                        inputRange: [
                                            Math.floor(width / 2),
                                            width - 150,
                                        ],
                                        outputRange: [1.4, 0],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        },
                    ]}
                />
                <Animated.Image
                    source={require('./assets/burger.png')}
                    style={[
                        styles.image,
                        {
                            transform: [
                                { translateX: translation3.x },
                                { translateY: translation3.y },
                                {
                                    scale: translation3.x.interpolate({
                                        inputRange: [
                                            Math.floor(width / 2),
                                            width - 150,
                                        ],
                                        outputRange: [1.3, 0],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        },
                    ]}
                />
                <ProductList addItem={addItem} />
                <Plate getLocation={getLocation} />
                <ContactInfo />
            </View>
            <Payment total={total} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingBottom: 40,
    },
    image: {
        width: 100,
        height: 100,
        position: 'absolute',
        zIndex: 500,
    },
});
