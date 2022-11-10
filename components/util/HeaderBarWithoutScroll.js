import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../Constants/Color'
import { SvgXml } from 'react-native-svg';
import { AddressIcon, Backarrow, ProfileIcon, SettingsIcon, User, } from '../../Constants/SVG';
import {  Menu, Provider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
const screenWidth = Dimensions.get('window').width
const HeaderBarWithoutScroll = ({ text, }) => {

    const navigation = useNavigation();
    const userImage = useSelector(state => state.user.userImage)
    console.log("user image " + userImage);
    const [visible, setVisible] = React.useState(false);

    const usrAccountHandler = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    const backHandler = () => {
        navigation.goBack(null)
    }
    const profileHandler = () => {
        setVisible(false)
        navigation.navigate('profile')
    }
    const addressHandler = () => {
        setVisible(false)
        navigation.navigate('address')
    }
    const settingHandler = () => {
        setVisible(false)
        navigation.navigate('settings')
    }
    let imagePreview = <SvgXml xml={User} />
    if (userImage) {
        imagePreview = <View style={styles.imageContainer}>
            {
                userImage !== '' && <Image
                    source={{ uri: userImage }}
                    style={styles.image}
                />
            }
        </View>
    }
    return (

        <View style={{ height: 80, zIndex: 10,}}>
            <Provider >
                {/* <View style={{flex:1}}> */}
                {/* <SafeAreaView style={{ backgroundColor: Colors.yellow100 }}> */}
                    <StatusBar/>
                        <Menu
                            contentStyle={styles.menu}
                            visible={visible}
                            onDismiss={closeMenu}

                            anchor={
                                <SafeAreaView style={{backgroundColor:Colors.yellow100,height:80}}>
                                <View style={styles.header}>
                                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                        <TouchableOpacity style={styles.backContainer} onPress={backHandler}>
                                            <SvgXml xml={Backarrow} width={20} height={20} />
                                        </TouchableOpacity>
                                        <Animated.Text style={styles.headerText}>
                                            {text}
                                        </Animated.Text>
                                    </View>
                                    <TouchableOpacity style={styles.userContainer} onPress={usrAccountHandler}>
                                        {imagePreview}
                                    </TouchableOpacity>
                                </View>
                                </SafeAreaView>
                            }>
                            <Menu.Item onPress={profileHandler} title="Profile" titleStyle={styles.menuItem} icon={() => <SvgXml xml={ProfileIcon} />} />
                            <Menu.Item onPress={addressHandler} title="Address" titleStyle={styles.menuItem} icon={() => <SvgXml xml={AddressIcon} />} />
                            <Menu.Item onPress={settingHandler} title="Settings" titleStyle={styles.menuItem} icon={() => <SvgXml xml={SettingsIcon} />} />
                        </Menu>
                    
                {/* </SafeAreaView> */}
                {/* </View> */}
            </Provider>
        </View>

    )
}

export default HeaderBarWithoutScroll

const styles = StyleSheet.create({
    header: {
        zIndex: 2,
        flexDirection: "row",
        alignItems: "center",
        // height: 10,
        top:10,
        justifyContent: "space-between",
        backgroundColor: Colors.yellow100
    },
    headerText: {
        fontFamily: 'ExtraBold',
        fontSize: 16
    },
    backContainer: {
        backgroundColor: "rgba(248, 243, 223, 0.56)",
        marginHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
        // padding: 8,
        height:35,
        width:35,
        borderRadius: 20,

    },
    userContainer: {
        marginHorizontal: 16
    },
    menu: {
        flex: 1,
        zIndex: 10,
        borderRadius: 16,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        elevation: 1,
        top: 90,
        left: screenWidth/2.2,


    },
    menuItem: {
        fontFamily: "Regular",
        color: Colors.deepBlue100
    },
    imageContainer: {
        height: 35,
        width: 35,

    },
    image: {
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 100,
    }
})