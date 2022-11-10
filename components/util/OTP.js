import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { Colors } from '../../Constants/Color'

const screenWidth = Dimensions.get('window').width
const OTP = ({ code, setCode, error, setError }) => {


    const codeDigitsArray = [1, 2, 3, 4, 5, 6];
    const maxLength = 6
    const textInputRef = useRef(null)
    let color = ""
    let arr = []
    const toCodeDigitInput = (value, index) => {
        const emptyInputChar = " ";
        const digit = code[index] || emptyInputChar;

        const isCurrentDigit = index === code.length;
        // const isLastDigit = index === maxLength - 1;
        const isCodeFull = code.length === maxLength;
        arr = isCurrentDigit
        // const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);
        console.log({ ...code });

        if (code[index]) {
            color = Colors.deepBlue80;
        }
        else {
            color = Colors.grey84
        }
        if (error) {
            color = Colors.pink100;
        }
        return (
            <View key={index} style={[styles.viewContainer, { borderColor: color }]}>
                <Text style={styles.text}>{digit}</Text>
            </View>
        )
    }
    const onFocusHandler = () => {
        setError(false)
    }
    return (
        <View style={styles.OTPInputSection}>
            <Pressable style={{ flexDirection: "row", justifyContent: "space-around" }} >
                {codeDigitsArray.map(toCodeDigitInput)}
            </Pressable>
            <TextInput
                style={styles.textInput}
                value={code}
                onChangeText={setCode}
                maxLength={maxLength}
                keyboardType="number-pad"
                returnKeyType="done"
                textContentType="oneTimeCode"
                ref={textInputRef}
                onFocus={onFocusHandler}
            />

        </View>
    )
}

export default OTP

const styles = StyleSheet.create({
    OTPInputSection: {
        justifyContent: "center",
        alignItems: "center",


    },
    textInput: {
        padding: 20,
        width: 300,
        position: "absolute",
        opacity: 0,
        borderWidth: 2
    },
    viewContainer: {
        borderWidth: 1,
        borderBottomWidth: 10,
        borderRadius: 10,
        width: screenWidth/7,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        height: screenWidth/6,
        backgroundColor: "#FAFAFA"

    },
    text: {
        fontSize: 24,
        fontFamily: "Bold",
        color: Colors.deepBlue100
    }
})
