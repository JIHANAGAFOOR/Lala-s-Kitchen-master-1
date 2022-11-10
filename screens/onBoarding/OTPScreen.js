import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Alert, Modal, KeyboardAvoidingView, Pressable, Keyboard } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../../components/util/Buttons/PrimaryButton'
import { Colors } from '../../Constants/Color'
import LoadingOverlay from '../../components/util/LoadingOverlay'
import { useEffect } from 'react'
import LottieView from 'lottie-react-native'
import SecondaryButton from '../../components/util/Buttons/SecondaryButton'
import OTP from '../../components/util/OTP.js'
import { SvgXml } from 'react-native-svg'
import { OTPExclamation } from '../../Constants/SVG'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../store/User'
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import awsconfig from '../../src/aws-exports';
Amplify.configure(awsconfig);
const OTPScreen = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const session = useSelector(state => state.user.otpSession)
  // console.log("session  in OTP screen: " + JSON.stringify(session));
  const [message, setMessage] = useState("")
  const [error, setError] = useState(false)
  const [code, setCode] = useState("")
  const [color, setColor] = useState("");
  const [status, setStatus] = useState(" ")
  const [Loading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval);
    };
  });
  const buttonOTPhandler = () => {
    if (session && code) {
      Auth.sendCustomChallengeAnswer(session, code)
        .then((user) => {
          // setLoading(true)
          console.log("ddddd : "+user);
          navigation.navigate('permissionScreen')
          dispatch(userActions.otpVerify({ session: session, user: user }))
          setError(false)
        })
        .catch((err) => {
          setError(true);
          // setStatus(err)
          setMessage(err.message)
        });
    }
    if (code === "") {
      setMessage("Please Enter OTP")
      setCode("000000")
      setError(true)
      return
    }
  }
  useEffect(() => {
    setError(false)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
    setTimeout(() => { setColor(Colors.yellow100) }, 6500)
  }, [])

  const wrongNumberHandler = () => {
    setModalVisible(true)
  }

  const changeNumberHandler = () => {
    navigation.navigate('numberVerification')

  }
  const cancelHandler = () => {
    setModalVisible(false)
  }
  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}
    >
      {Loading &&
        <View style={{ justifyContent: "center", alignSelf: "center", alignContent: "center" }}>
          <LoadingOverlay />
        </View>}
      <View style={styles.container}>

        <KeyboardAvoidingView style={styles.scrollViewContainer} behavior={Platform.OS === "ios" ? "padding" : "height"}>
          <View style={styles.textContainer}>
            <Text style={styles.otpText}>Verify with OTP</Text>
            <Text style={styles.fallbackText}>Check your SMS and enter the 4- digit code send you at</Text>
            <View style={styles.wrongNumberContainer}>
              <Text style={styles.text}>{route.params.number}</Text>
              <TouchableOpacity onPress={wrongNumberHandler}>
                <Text style={styles.wrongNumber}>Wrong Number?</Text>
              </TouchableOpacity>
              <Modal
                transparent={true}
                accessibilityElementsHidden
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Modal has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Are you sure to change number?</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: 20, marginHorizontal: 10 }}>
                      <SecondaryButton styless={{}} onPress={cancelHandler}>No</SecondaryButton>
                      <PrimaryButton onPress={changeNumberHandler} styless={{}}>Yes</PrimaryButton>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <OTP code={code} setCode={setCode} error={error} setError={setError} />
            </View>
            <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
              <TouchableOpacity style={[styles.resendContainer, { backgroundColor: color }]} onPress={() => { setSeconds(5) }}>
                <Text style={styles.wrongNumber}>Resend OTP</Text>
              </TouchableOpacity>
              <View style={{ padding: 10 }}>
                <Text style={styles.wrongNumber}>0{minutes}:{seconds}</Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
        {error && <View style={styles.incorrectOTPContainer}>
          <SvgXml xml={OTPExclamation} />
          <Text style={styles.incorrectOTPText}>{message}</Text>
        </View>}
        <PrimaryButton onPress={buttonOTPhandler}>Confirm</PrimaryButton>
      </View>
    </Pressable>
  )
}

export default OTPScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greyWhite,
    padding: 24,
  },
  scrollViewContainer: {
    flex: 8,
  },
  backgroundImageStyle: {
    opacity: 0.5
  },

  textContainer: {
    // flex: 7,
  },
  text: {
    fontFamily: "ExtraBold",
    fontSize: 20,
    color: Colors.deepBlue80,

  },
  otp: {
    justifyContent: "center",
    padding: 8,
    borderWidth: 2,
    borderRadius: 8,
    borderBottomWidth: 10,
    elevation: 0,
    height: 80,
    width: 80,
    color: Colors.deepBlue100,
    fontFamily: 'Bold'
  },
  errorText: {
    color: Colors.orange100,
    fontSize: 15
  },
  otpText: {
    fontSize: 28,
    fontFamily: 'Bold',
    marginVertical: 5,
    color: Colors.deepBlue100

  },
  fallbackText: {
    color: Colors.grey50,
    fontFamily: 'Regular',
    fontSize: 14,
    color: Colors.deepBlue100
  },
  wrongNumberContainer: {
    marginVertical: 24
  },
  wrongNumber: {
    fontFamily: "Regular",
    color: Colors.grey64,
    fontSize: 12,
  },
  resendContainer: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#A3A3A3"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 40,
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
  modalText: {
    fontFamily: "Bold"
  },
  incorrectOTPContainer: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: Colors.grey95,
    padding: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 16,
    flexDirection: "row"
  },
  incorrectOTPText: {
    fontFamily: "Bold",
    fontSize: 16,
    color: Colors.pink200,
    marginHorizontal: 8
  }
})