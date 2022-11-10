import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import LottieView from 'lottie-react-native'
import Animated, { FadeIn, FadeOut, interpolateNode } from 'react-native-reanimated';
import { Colors } from '../../../Constants/Color'
import { SvgXml } from 'react-native-svg'
import { Minus, MinusGray, NonVegMeal, Plus, VegMeal } from '../../../Constants/SVG'
import { Entypo } from '@expo/vector-icons';
import PrimaryButton from '../Buttons/PrimaryButton'
import { useState } from 'react'
import { useEffect } from 'react';
import { mealsActions } from '../../../store/meals';
import { addonsActions } from '../../../store/addons';
var screenHeight = Dimensions.get('window').height;

const AddonsCard = ({ item }) => {
    const dispatch = useDispatch()
    const [mealIcon, setMealIcon] = useState(NonVegMeal)

    const AddtoCartHandler = (item) => {
        dispatch(addonsActions.cartItemAdded(item))
    }

    const incrementHandler = (id) => {
        dispatch(addonsActions.cartItemIncrement(id))
    }
    const decrementHandler = (id) => {
        dispatch(addonsActions.cartItemDecrement(id))
    }

    useEffect(() => {
        if (item.typeOfMeal === 'Veg') {
            setMealIcon(VegMeal)
        }
        if (item.typeOfMeal === 'Non-Veg') {
            setMealIcon(NonVegMeal)
        }
    }, [item])

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={{ height: '100%', width: '100%' }} />
            </View>
            <View style={styles.dataContainer}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <SvgXml xml={mealIcon} />
                        <Text style={styles.text}>{item.type}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Entypo name="star" size={16} color={Colors.yellow100} />
                        <Text style={styles.text}>Best Seller</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 4 }}>
                    <Text style={styles.itemText}>{item.name}</Text>
                </View>
                <View style={{ marginVertical: 0 }}>
                    <Text style={styles.ingredientText}>{item.ingredient}</Text>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 4, justifyContent: "space-between" }}>
                    <View>
                        <Text style={styles.itemText}>{`₹${item.price}`}</Text>
                    </View>
                    {!item.animation && <TouchableOpacity style={styles.addContainer} onPress={() => AddtoCartHandler(item)}>
                        <Text style={styles.itemText}>
                            <Entypo name="plus" size={16} color={Colors.deepBlue100} />
                            <Text>{' '}</Text>
                            Add</Text>
                    </TouchableOpacity>}
                    {item.animation &&

                        <Animated.View
                            key={'uniqueKey'}
                            entering={FadeIn.duration(1000)}
                            exiting={FadeOut.duration(1000)}
                            style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", }}>
                            <TouchableOpacity style={[styles.mealCounter, { borderColor: Colors.yellow100 }]}
                                onPress={() => decrementHandler(item.id)}
                            >
                                <SvgXml xml={Minus} />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.number}>{item.quantity}</Text>
                            </View>
                            <TouchableOpacity style={[styles.mealCounter, { borderColor: Colors.yellow100, }]}
                                onPress={() => incrementHandler(item.id)}
                            >
                                <SvgXml xml={Plus} />
                            </TouchableOpacity>

                        </Animated.View>}
                </View>
            </View>
        </View>
    )
}

export default AddonsCard

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderTopColor: Colors.grey90,
        marginHorizontal: 4,
        flexDirection: "row",
        padding: 8,

    },
    imageContainer: {
        backgroundColor: Colors.grey90,
        flex: 1,
        borderRadius: 10,
        overflow: "hidden",
        aspectRatio: 1 / 1,
    },
    dataContainer: {
        flex: 2,
        padding: 8
    },
    text: {
        fontFamily: "Regular",
        fontSize: 12,
        marginHorizontal: 4,
        color: Colors.deepBlue100
    },
    itemText: {
        fontFamily: "ExtraBold",
        color: Colors.deepBlue100
    },
    ingredientText: {
        color: Colors.deepBlue100,
        fontFamily: "Regular"
    },
    addContainer: {
        backgroundColor: Colors.yellow100,
        padding: 8,
        width: 100,
        justifyContent: "center",
        alignItems: "center",
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 1,
        borderRadius: 8,
    },

    mealCounter: {
        borderWidth: 2,
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        justifyContent: "center",
        alignItems: "center",
        marginTop: screenHeight / 100
    },
    // text: {
    //   fontFamily: "Bold",
    //   fontSize: 16
    // },
    number: {
        fontFamily: "Bold",
        marginHorizontal: 15,
        fontSize: 18,
    },
})