import { StyleSheet, View, ScrollView, Text, Alert, Keyboard, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../../components/util/Buttons/PrimaryButton'
import OutlinedButton from '../../components/util/Buttons/SecondaryButton'
import UserInput from '../../components/util/UserInput'
import { Colors } from '../../Constants/Color'
import { useEffect } from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../../store/User'
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import awsconfig from '../../src/aws-exports';
import { SvgXml } from 'react-native-svg'
import { OTPExclamation } from '../../Constants/SVG'
Amplify.configure(awsconfig);
const NOTSIGNIN = 'You are NOT logged in';
const SIGNEDIN = 'You have logged in successfully';
const SIGNEDOUT = 'You have logged out successfully';
const WAITINGFOROTP = 'Enter OTP number';
const VERIFYNUMBER = 'Verifying number (Country code +XX needed)';

const AccountCreation = ({ navigation }) => {
  const [userDetails, setUserDetails] = useState({ enteredNumber: "+91", fName: "", lName: "" })
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const [message, setMessage] = useState('Welcome to Demo');
  // const [user, setUser] = useState(null);
  // const [session, setSession] = useState(null);
  var session = null
  var user = useSelector(state => state.user.otpUser)
  const [otp, setOtp] = useState('');
  const [number, setNumber] = useState('');
  const password = Math.random().toString(10) + 'Abc#';
  // useEffect(() => {
  //   console.log("user data  inn :" + user);
  // }, [user])
  console.log("number : " + userDetails.enteredNumber);
  useEffect(() => {
    verifyAuth();
  }, []);
  const verifyAuth = () => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        // console.log("user data: " + user)
        // setUser(user);
        setMessage(SIGNEDIN);
        dispatch(userActions.otpAuth({ user: user, session: null }))
        // setSession(null);
      })
      .catch((err) => {
        // console.error(err);
        setMessage(NOTSIGNIN);
      });
  };
  const signIn = () => {
    if (userDetails.enteredNumber) {
      console.log("entered number :" + userDetails.enteredNumber)
      if (!userDetails.enteredNumber.startsWith("+91")) {
        setError("Please enter country code(+91)")
        return
      }
      if (userDetails.enteredNumber.length < 13) {
        setError('Invalid input')
        return;
      }
      setMessage(VERIFYNUMBER);
      Auth.signIn(userDetails.enteredNumber)
        .then((result) => {
          dispatch(userActions.otpSessionData(result))
        })
        .catch((e) => {
          if (e.code === 'UserNotFoundException') {
            signUp();
          } else if (e.code === 'UsernameExistsException') {
            setMessage(WAITINGFOROTP);
            signIn();
          } else {
            console.log(e.code);
          }
        });
      dispatch(userActions.userDetailsSelected(userDetails))
      navigation.navigate('otpScreen', { number: userDetails.enteredNumber, })
    }
    else {
      if (!userDetails.enteredNumber.trim()) {
        setError("Number can't be blank")
        setUserDetails({ enteredNumber: "" })
        return;
      }
    }
  }
  const signUp = async () => {
    console.log("entered number in sign up :" + userDetails.enteredNumber)
    if (userDetails.enteredNumber) {
      const result = await Auth.signUp({
        username: userDetails.enteredNumber,
        password,
        attributes: {
          phone_number: userDetails.enteredNumber,
        },
      }).then(() => signIn());
      return result;
    }
  };

  const inputHandler = (inputIdentifier, enteredValue) => {
    setUserDetails(currentInputValues => {
      return {
        ...currentInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }
  useEffect(() => {
    if (userDetails.enteredNumber.length === 10) {
      setError("")
    }
    // if (enteredNumber.trim()) {
    //   setError("")
    // }

  }, [error, userDetails.enteredNumber])
  // console.log("session :"+JSON.stringify(session));
  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.scrollViewContainer} behavior={Platform.OS === "ios" ? "padding" : "height"}>

        <View style={{ marginVertical: 16 }}>
          <Text style={styles.welcomeText}>Create  Account</Text>
          <Text style={styles.fallbackText}>Create your account by adding personal details and verifying phone number.</Text>
        </View><Text>{message}</Text>
        <Text style={styles.text}>First Name</Text>
        <UserInput
          placeholder="Enter First Name"
          onChange={inputHandler.bind(this, 'fName')}
          value={userDetails.fName}
          maxLength={10}
          focusHandler={() => setError("")}
        >Enter  your Mobile Number</UserInput>
        <Text style={styles.text}>Last Name</Text>
        <UserInput
          placeholder="Enter Last Name"
          onChange={inputHandler.bind(this, 'lName')}
          value={userDetails.lName}
          maxLength={10}
          focusHandler={() => setError("")}
        >Enter  your Mobile Number</UserInput>
        <Text style={styles.text}>Phone number</Text>
        <UserInput
          keyboardType="phone-pad"
          placeholder="Enter 10 Digit Phone Number"
          onChange={inputHandler.bind(this, 'enteredNumber')}
          value={userDetails.enteredNumber}
          maxLength={13}
          styless={error !== "" ? styles.numberText : ""}
          focusHandler={() => setError("")}
        >Enter  your Mobile Number</UserInput>
        <View style={{ flexDirection: "row", marginHorizontal: 8, alignItems: "center" }}>
          {error !== "" && <SvgXml xml={OTPExclamation} />}
          <Text style={styles.errorText}>{error}</Text>
        </View>


      </KeyboardAvoidingView>
      <PrimaryButton onPress={signIn}>Verify</PrimaryButton>
    </Pressable>
  )
}

export default AccountCreation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 24,
  },
  scrollViewContainer: {
    flex: 8,
  },
  welcomeText: {
    fontSize: 28,
    marginVertical: 10,
    fontFamily: 'Bold',
    lineHeight: 30,
    color: Colors.deepBlue100
  },

  fallbackText: {
    color: Colors.grey50,
    fontFamily: 'Regular',
    fontSize: 16,
    // marginVertical: 25,
    color: Colors.deepBlue100
  },
  text: {
    fontFamily: "Regular",
    fontSize: 16,
    marginTop: 8,
    color: Colors.deepBlue100,
  },
  errorText: {
    color: Colors.pink200,
    fontFamily: "Regular",
    fontSize: 16,
    marginHorizontal: 8
  },
  numberText: {
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 5,
    shadowColor: Colors.pink200
  }
})