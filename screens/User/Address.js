import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderBarWithoutScroll from '../../components/util/HeaderBarWithoutScroll'
import { Colors } from '../../Constants/Color'
import { SvgXml } from 'react-native-svg'
import { Default, Delete, Edit, EditName, Home } from '../../Constants/SVG'
import { Phone } from '../../Constants/SVG'
import HorizontalContainerWithIcon from '../../components/util/Cards/HorizontalContainerWithIcon'
const Address = () => {
    return (
        <View style={styles.container}>
            <HeaderBarWithoutScroll text={'Address  Book'} />
            <View style={styles.innerContainer}>
                <View style={styles.addressContainer}>

                    <View style={{ flexDirection: "row", }}>
                        <SvgXml xml={Home} />
                        <View style={{ marginHorizontal: 16 }}>
                            <Text style={styles.name}>Niharika Chandran</Text>
                            <Text style={styles.text}>Neelima HS Road</Text>
                            <Text style={styles.text}>Statue Junction</Text>
                            <Text style={styles.text}>Palayam</Text>
                            <Text style={styles.text}>Thiruvananthapuram</Text>
                            <Text style={styles.text}>Kerala </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", marginVertical: 12 }}>
                        <SvgXml xml={Phone} />
                        <View style={{ marginHorizontal: 16 }}>
                            <Text style={styles.text}>7034551432 </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
                        <TouchableOpacity style={styles.statusContainer}>
                            <HorizontalContainerWithIcon icon={Edit} text={"Edit"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.statusContainer}>
                            <HorizontalContainerWithIcon icon={Delete} text={"Delete"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.statusContainer}>
                            <HorizontalContainerWithIcon icon={Default} text={"Default"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default Address

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grey95
    },
    innerContainer: {
        padding: 16

    },
    addressContainer: {
        padding: 16,
        marginTop:16,
        borderWidth: 1,
        borderColor: Colors.grey95,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        elevation: 1,
        borderRadius: 16,
        backgroundColor: "white",

    },
    name: {
        color: Colors.deepBlue100,
        fontFamily: "ExtraBold",
        fontSize: 16
    },
    text: {
        color: Colors.deepBlue100,
        fontFamily: "Regular",
        marginVertical: 5,
        fontSize: 16
    },
    statusContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 2,
        shadowOpacity: 0.3,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        // padding: 4,
        paddingHorizontal: 12,
    },
})