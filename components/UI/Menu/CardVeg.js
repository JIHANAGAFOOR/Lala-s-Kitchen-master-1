import { StyleSheet, Text, View, Image, Dimensions, Easing, Animated, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../Constants/Color'
import { useDispatch, useSelector } from 'react-redux'
import { Meal, MealCorrected } from '../../../DUMMY_DATA'
import { SvgXml } from 'react-native-svg'
import { useEffect } from 'react'
import Category from '../../../screens/subscription/Category'
import { mealsActions } from '../../../store/meals'
var screenHeight = Dimensions.get('window').height;
const CardVeg = ({ mealIcon }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const dispatch = useDispatch();
    let animatedValue = new Animated.Value(0);
    let currentValue = 0;
    const id = useSelector(state => state.meal.typeOfMeal)
    animatedValue.addListener(({ value }) => {
        currentValue = value;
    });

    const categorySelected = useSelector(state => state.meal.category)
    const Breakfast=MealCorrected.filter((data)=>(
        (data.category === categorySelected && data.type === "Veg" && data.slot==='breakfast')
    ))
    const Lunch=MealCorrected.filter((data)=>(
        (data.category === categorySelected && data.type === "Veg" && data.slot==='lunch')
    ))
    const Dinner=MealCorrected.filter((data)=>(
        (data.category === categorySelected && data.type === "Veg" && data.slot==='dinner')
    ))
    const flipAnimation = () => {
        if (currentValue >= 90) {
            Animated.spring(animatedValue, {
                toValue: 0,
                tension: 10,
                friction: 8,
                duration: 400,
                easing: Easing.linear,

                useNativeDriver: false,
            }).start();
        } else {
            Animated.spring(animatedValue, {
                toValue: 180,
                tension: 10,
                friction: 8,
                duration: 400,
                easing: Easing.linear,
                useNativeDriver: false,
            }).start();
        }
    };

    const setInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ["0deg", "360deg"],
    });

    const menuHandler = (item) => {
        console.log(item.category);

        dispatch(mealsActions.cardDataSelected(item))
        dispatch(mealsActions.mealTypeSelected(mealIcon))
        setModalVisible(true)
    }
    useEffect(() => {
        flipAnimation();
    }, [id])
    return (
        <View style={styles.outerContainer}>
            <Modal
                transparent={true}
                accessibilityElementsHidden
                visible={modalVisible}
                style={{ margin: 30 }}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={{ flex: 1, }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Category setModalVisible={setModalVisible} modalVisible={modalVisible} />
                        </View>
                    </View>
                </View>
            </Modal>
            {Breakfast.map((item) => (
                <TouchableOpacity style={{ flex: 1 }} key={item.id} onPress={() => menuHandler(item)}>
                    <Animated.View
                        style={[styles.container, {
                            transform: [{ rotateX: setInterpolate }]
                        }]}
                        key={item.id}>
                        <View style={styles.itemContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
                                <SvgXml xml={mealIcon} />
                                <Text style={styles.meal}>Breakfast</Text>
                            </View>
                            <Text style={styles.item}>{item.itemName}</Text>
                            <Text style={styles.item}>{item.Curry}</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image source={item.image} style={{ height: '100%', width: '100%' }} />
                        </View>
                    </Animated.View>
                </TouchableOpacity>
            ))}
            {Lunch.map((item) => (
                <TouchableOpacity style={{ flex: 1 }} key={item.id} onPress={() => menuHandler(item)}>
                    <Animated.View
                        style={[styles.container, {
                            transform: [{ rotateX: setInterpolate }]
                        }]}
                        key={item.id}>
                        <View style={styles.itemContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
                                <SvgXml xml={mealIcon} />
                                <Text style={styles.meal}>Lunch</Text>
                            </View>
                            <Text style={styles.item}>{item.itemName}</Text>
                            <Text style={styles.item}>{item.Curry}</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image source={item.image} style={{ height: '100%', width: '100%' }} />

                        </View>
                    </Animated.View>
                </TouchableOpacity>
            ))}
            {Dinner.map((item) => (
                <TouchableOpacity style={{ flex: 1 }} key={item.id} onPress={() => menuHandler(item)}>
                    <Animated.View
                        style={[styles.container, {
                            transform: [{ rotateX: setInterpolate }]
                        }]}
                        key={item.id}>
                        <View style={styles.itemContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
                                <SvgXml xml={mealIcon} />
                                <Text style={styles.meal}>Dinner</Text>
                            </View>
                            <Text style={styles.item}>{item.itemName}</Text>
                            <Text style={styles.item}>{item.Curry}</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image source={item.image} style={{ height: '100%', width: '100%' }} />

                        </View>
                    </Animated.View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default CardVeg

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        // backgroundColor:"green",
        flex: 1,
        marginBottom: 8,
        // minHeight: 80,
        flexDirection: "row",
        padding: 16,
        backgroundColor: 'white',
        justifyContent: "space-between",
        elevation: 2,
        alignItems: 'center',
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        borderRadius: 12,
    },
    itemContainer: {
        // flex: 1,
        // justifyContent: "space-around",
    },

    imageContainer: {
        backgroundColor: Colors.grey1,
        width:screenHeight/ 8,
        height:screenHeight/ 8,
        // flex: 1,
        borderRadius: 10,
        overflow: "hidden"
    },
    meal: {
        fontFamily: 'Regular',

        color: Colors.deepBlue100,
        marginHorizontal: 10,
        // fontSize: 16
    },
    item: {
        fontFamily: 'ExtraBold',
        color: Colors.deepBlue100,
        fontSize: 14
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 30
    },
    modalView: {
        // margin: 20,
        backgroundColor: "white",
        // borderRadius: 10,
        // padding: 20,
        // borderWidth: 30,
        // borderColor: "rgba(127, 126, 126, 0.72)",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})