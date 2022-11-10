import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../Constants/Color'
import { SvgXml } from 'react-native-svg'

const HorizontalContainerWithIcon = ({ icon, text, styless }) => {
    return (
        <View style={[styles.container, styless]}>
            <SvgXml xml={icon} />
            <Text style={[styles.text, styless]}>{text}</Text>
        </View>
    )
}

export default HorizontalContainerWithIcon

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 8,
        alignItems: "center",
        // marginHorizontal: 8
    },
    text: {
        fontFamily: "Regular",
        color: Colors.deepBlue100,
        fontSize: 12,
        marginHorizontal: 8
    },
})