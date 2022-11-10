import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderBarWithoutScroll from '../../../components/util/HeaderBarWithoutScroll'
import { SvgXml } from 'react-native-svg'
import { Camera, EditName, ProfilePicture } from '../../../Constants/SVG'
import { Colors } from '../../../Constants/Color'
import { useState } from 'react'
import ImagePickerItem from './ImagePicker'

const Profile = () => {
    const [imageTaken, setImagetaken] = useState()
    function imageTakenHandler(imageUri) {
        setImagetaken(imageUri)
    }
    return (
        <View style={styles.container}>
            <HeaderBarWithoutScroll>Profile</HeaderBarWithoutScroll>
            <View style={styles.innerContainer}>
                <View style={styles.ProfilePictureContainer}>
                    <ImagePickerItem />
                </View>
                <View style={styles.userDetailsContainer}>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.text}>Name</Text>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>Niharika Chandran</Text>
                            <TouchableOpacity>
                                <SvgXml xml={EditName} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.fallbackText}>This is just a display name. For delivery purposes use Address Book.</Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.text}>Name</Text>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>Niharika Chandran</Text>
                            <TouchableOpacity>
                                <SvgXml xml={EditName} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.fallbackText}>This is just a display name. For delivery purposes use Address Book.</Text>
                    </View>
                </View>
            </View>
        </View>
        
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1
    },
    ProfilePictureContainer: {
        flex: 1,

        justifyContent: "center",
        alignItems: "center"
    },
    userDetailsContainer: {
        flex: 1.5,
        paddingHorizontal: 32
    },
    cameraContainer: {
        backgroundColor: Colors.yellow100,
        padding: 12,
        paddingVertical: 14,
        borderRadius: 50,
        elevation: 2,
        shadowOpacity: 0.2,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        position: 'absolute',
        right: 105,
        bottom: 50
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text: {
        fontFamily: "Bold",
        fontSize: 12,
        color: Colors.grey44,
        marginVertical: 4
    },
    name: {
        fontFamily: "ExtraBold",
        fontSize: 20,
        color: Colors.deepBlue100
    },
    fallbackText: {
        fontFamily: "Regular",
        fontSize: 12,
        color: Colors.grey44,
        marginVertical: 8,
        marginRight: 32
    },
    detailsContainer: {
        marginVertical: 16
    }
})
