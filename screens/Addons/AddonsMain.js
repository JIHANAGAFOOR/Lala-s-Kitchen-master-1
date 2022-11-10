import { Dimensions, KeyboardAvoidingView, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import AddonsCard from '../../components/util/Cards/AddonsCard'
import { Feather } from '@expo/vector-icons'
import Addon from '../../components/UI/Addons/Addon'
import { Colors } from '../../Constants/Color'
import { AntDesign } from '@expo/vector-icons';
import IconBadge from 'react-native-icon-badge';
import { useEffect } from 'react'
import { ItemFull } from '../../DUMMY_DATA'
import { addonsActions } from '../../store/addons'
import HeaderBarWithoutScroll from '../../components/util/HeaderBarWithoutScroll'
import { SvgXml } from 'react-native-svg'
import { cartIcon, MealIcon, mealIcon, MenuIcon } from '../../Constants/SVG'
var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width
const AddonsMain = ({ navigation }) => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")
    const [focus, setFocus] = useState(false)
    const cartMeal = useSelector(state => state.addon.totalQuantity)
    const scrollFilter = useSelector(state => state.addon.scrollFilter)
    const itemFull = useSelector(state => state.addon.itemDisplay)
    const itemData = useSelector(state => state.addon.itemData)
    const typeItem = useSelector(state => state.addon.typeItem)
    const ingredientItem = useSelector(state => state.addon.ingredientItem)
    const searchChangeText = (search) => {
        setSearch(search)
    }
    const cartHandler = () => {
        navigation.navigate("cart")
    }
    const focusHandler = () => {
        setFocus(!focus)
    }
    const itemPressedhandler = (item, itemName, selected) => {
        console.log("sssss: " + !selected);

        dispatch(addonsActions.scrollFilterSelected({
            // item: newItem,
            item: item,
            itemName: itemName,
            itemSelected: selected,
            mealType: "All",
        }))

    }
    useEffect(() => {
        dispatch(addonsActions.typeAndIngredientSelected({ type: typeItem, ingredient: ingredientItem }))
    }, [ItemFull, itemData, typeItem, ingredientItem])
    return (

        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}
            enabled={false}>
            <HeaderBarWithoutScroll text={"Addons"} />
            <View style={styles.innerContainer}>
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <View style={styles.textContainer}>
                        <View style={{ flex: 8, }}>
                            <TextInput
                                onChangeText={searchChangeText}
                                value={search}
                                style={styles.inputStyle}
                                onFocus={focusHandler}
                                onBlur={() => setFocus(false)}
                            />
                        </View>
                        <View style={{ backgroundColor: focus ? Colors.yellow100 : "white", flex: 1, justifyContent: "center", alignItems: "center", borderTopEndRadius: 7, borderBottomEndRadius: 7 }}>
                            <Feather
                                name='search'
                                color='#000'
                                size={24}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: "center", }}>
                    <Addon />
                </View>
                <View style={{ flex: 1, justifyContent: "center", marginHorizontal: 8, }}>
                    <ScrollView style={{ flex: 1, }} horizontal={true} showsHorizontalScrollIndicator={false}>
                        {scrollFilter.map((item, index) => (
                            <TouchableOpacity style={[styles.scrollItem, {
                                backgroundColor: (

                                    item.selected ? Colors.yellow100 : "white"
                                )
                            }]} key={index} onPress={() => itemPressedhandler(item, item.name, item.selected)}>
                                <Text style={styles.text}>{item.name}</Text>
                            </TouchableOpacity>
                        ))}

                    </ScrollView>
                </View>
            </View>
            <View style={styles.scrollContainer}>
                <ScrollView style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    {itemFull.filter((val) => {
                        if (val.name.toLowerCase().includes(search.toLowerCase())) {
                            return val
                        }
                    }).map((item, id) => (
                        <AddonsCard item={item} key={id} />
                    ))}
                </ScrollView>
                <View style={{ position: "absolute", bottom: 40, right: 20, }}>

                    <IconBadge
                        MainElement={
                            <TouchableOpacity
                                onPress={cartHandler}
                                style={{
                                    backgroundColor: Colors.yellow100,
                                    width: cartMeal > 0 ? screenWidth/1.123
                                    
                                    : 60,
                                    height: 60,
                                    padding: 16,
                                    borderRadius: 8,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "row"

                                }} >
                                {cartMeal > 0 && <Text style={{ fontFamily: "ExtraBold", textAlign: "center" }}>Proceed to Payment</Text>}
                                <View style={{ alignItems: "flex-end", left: cartMeal > 0 ? 80 : 0 }}>
                                    <SvgXml xml={cartIcon}/>
                                </View>
                            </TouchableOpacity>
                        }

                        BadgeElement={
                            <Text style={{ color: '#FFFFFF', fontFamily: "ExtraBold" }}>{cartMeal}</Text>
                        }
                        IconBadgeStyle={

                            cartMeal > 0 ?
                                {
                                    width: 22,
                                    height: 22,
                                    backgroundColor: 'maroon',
                                } : {
                                    width: 0,
                                    height: 0,
                                    // backgroundColor: 'maroon',
                                }
                        }
                    // Hidden={this.state.BadgeCount == 0}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AddonsMain

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    innerContainer: {
        flex: 1,
        marginVertical: 8,
        // backgroundColor: "red"
    },
    scrollContainer: {
        flex: 3,
    },
    textContainer: {
        flex: 1,
        flexDirection: "row",
        maxHeight: screenHeight / 18,
        borderWidth: 1,
        borderColor: Colors.yellow100,
        borderRadius: 8,
        marginHorizontal: 8,
    },
    inputStyle: {
        flex: 1,
        fontFamily: "Regular",
        color: Colors.deepBlue100,
        fontSize: 16,
        marginHorizontal: 8,
        // marginVertical:8,
    },
    scrollItem: {
        justifyContent: "center",
        minHeight: screenHeight / 18,
        flex: 1,
        // maxHeight: 40,
        padding: 8,
        paddingHorizontal: 16,
        borderRadius: 30,
        elevation: 2,
        shadowOpacity: 0.2,
        backgroundColor: "white",
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        marginVertical: 4,
        marginHorizontal: 4,
    },
    scrollItemActive: {
        justifyContent: "center",
        padding: 8,
        paddingHorizontal: 16,
        borderRadius: 24,
        backgroundColor: Colors.yellow100,
        elevation: 2,
        shadowOpacity: 0.2,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 3,
        marginVertical: 4,
        marginHorizontal: 4,
    },
    text: {
        fontFamily: "Regular",
        color: Colors.deepBlue100,
    }
})