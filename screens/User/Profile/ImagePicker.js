import { StyleSheet, Button, View, Alert, Image, Text, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { stat } from 'react-native-fs';
import { SvgXml } from 'react-native-svg'
import { Camera, ProfilePicture } from '../../../Constants/SVG'
import { Colors } from '../../../Constants/Color'
import { useEffect } from 'react';
import {FileSystem} from 'expo'
const screenHeight = Dimensions.get('window').height
const ImagePickerItem = () => {
    const [pickedImagePath, setPickedImagePath] = useState('');
    const [imm, setImm] = useState({ height: "", width: "" })
    const showImagePicker = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        const statResult = await stat(pickedImagePath);
        console.log('file size: ' + statResult.size);
        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your photos!");
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({allowsEditing:false,})
        // let filesize=result.fi
        // console.log("filesize  :"+JSON.stringify(result));
        if (!result.cancelled) {
            setPickedImagePath(result.uri);
            console.log(result.uri);
        }
       
    }
    let imagePreview = <SvgXml xml={ProfilePicture} width={screenHeight / 3} height={screenHeight / 3} />
    if (pickedImagePath) {
        imagePreview = <View style={styles.imageContainer}>
            {
                pickedImagePath !== '' && <Image
                    source={{ uri: pickedImagePath }}
                    style={styles.image}
                />
            }
        </View>
    }
    useEffect(() => {
        // if (pickedImagePath) {
        //     Image.getSize(pickedImagePath, (width, height) => {
        //         console.log("size is " + width, height);
        //     });
        // }
        // ImagePicker.image
        // const statResult = await stat(pickedImagePath);
        // console.log('file size: ' + statResult.size);

    }, [pickedImagePath])
    return (
        <View style={styles.ProfilePictureContainer}>
            <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            <TouchableOpacity style={styles.cameraContainer} onPress={showImagePicker}>
                <SvgXml xml={Camera} />
            </TouchableOpacity>
        </View>
    )
}

export default ImagePickerItem

const styles = StyleSheet.create({
    imagePreview: {
        width: 200,
        height: 200,
        justifyContent: "center",
    },
    image: {
        width: '100%',
        height: "100%",
        overflow: "hidden",
        borderRadius: 100,
    },
    ProfilePictureContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
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
        right: -10,
        bottom: 40,
    },
})
