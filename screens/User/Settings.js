import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HeaderBarWithoutScroll from '../../components/util/HeaderBarWithoutScroll'
import { SvgXml } from 'react-native-svg'
import { Cancel, Delete, Logout, PermissionDenied, PermissionEnabled, SettingsIcon } from '../../Constants/SVG'
import { Colors } from '../../Constants/Color'
import SwitchToggle from 'react-native-switch-toggle'
import { useState } from 'react'
import HorizontalContainerWithIcon from '../../components/util/Cards/HorizontalContainerWithIcon'
import { useDispatch, useSelector } from 'react-redux'
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import awsconfig from '../../src/aws-exports';
import AwesomeAlert from 'react-native-awesome-alerts';
import Modal from "react-native-modal";

Amplify.configure(awsconfig);
import { userActions } from '../../store/User'
import { useEffect } from 'react'
import ToggleButton from '../../components/util/ToggleButton'
import IconTextButton from '../../components/util/Buttons/IconTextButton'

const Settings = ({ navigation }) => {
  const [switchEnable, setSwitchEnable] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false)
  const [user, setUser] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  const hideAlert = () => {
    setShowAlert(false)
  }
  const deleteAccountHandler = () => {
    setDeleteAccount(!deleteAccount)
  }
  console.log("uuuu :" + user);
  const dispatch = useDispatch()
  useEffect(() => {
    verifyAuth();
  }, []);
  const verifyAuth = () => {
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user)
        dispatch(userActions.otpAuth({ user: user, session: null }))
      })
      .catch((err) => {
        // console.error(err);
        // setMessage(NOTSIGNIN);
      });
  };
  const switchHandler = () => {
    setSwitchEnable(!switchEnable)
  }
  const LogoutHandler = () => {
    console.log("kkkk");
    if (user) {
      Auth.signOut();
      // setUser(null);
      dispatch(userActions.signOut(null))
      navigation.navigate("signup")
      // setOtp('');
      // setMessage(SIGNEDOUT);
    } else {
      setShowAlert(true)
      console.log("you don't have account ");

      // Alert.alert(
      //   "You don't have an account",
      //   "Please sign up",
      //   [
      //     { text: "OK", onPress: () => console.log("OK Pressed") }
      //   ]
      // );
    }
  }
  const deleteHandler = () => {
    setModalVisible(true)
  }
  return (
    <View style={{ flex: 1 }}>
      <HeaderBarWithoutScroll text={"Settings "} />
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Permission Status</Text>
          <SvgXml xml={SettingsIcon} />
        </View>
        <View style={styles.itemContainer}>
          <SvgXml xml={PermissionEnabled} />
          <Text style={styles.permissionText}>Location Permission</Text>
        </View>
        <View style={styles.itemContainer}>
          <SvgXml xml={PermissionDenied} />
          <Text style={styles.permissionText}>Phone Permission</Text>
        </View>
        <View style={styles.itemContainer}>
          <SvgXml xml={PermissionDenied} />
          <Text style={styles.permissionText}>Media Permission</Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Notification Channels</Text>
          <SvgXml xml={SettingsIcon} />
        </View>
        <View style={[styles.itemContainer, { justifyContent: "space-between" }]}>
          <Text style={styles.text}>Delivery Notifications</Text>
          <SwitchToggle
            switchOn={switchEnable}
            onPress={switchHandler}
            circleColorOff='#707070'
            circleColorOn={Colors.yellow100}
            backgroundColorOn='white'
            backgroundColorOff='white'
            containerStyle={{
              width: 48,
              height: 24,
              borderRadius: 24,
              borderColor: switchEnable ? Colors.yellow100 : "#707070",
              borderWidth: 1,
            }}
            circleStyle={{
              width: 24,
              height: 24,
              borderRadius: 12,
            }}
          />
        </View>
        <View style={[styles.itemContainer, { justifyContent: "space-between" }]}>
          <Text style={styles.text}>Subscription Notification</Text>
          <SwitchToggle
            switchOn={switchEnable}
            onPress={switchHandler}
            circleColorOff='#707070'
            circleColorOn={Colors.yellow100}
            backgroundColorOn='white'
            backgroundColorOff='white'
            containerStyle={{
              width: 48,
              height: 24,
              borderRadius: 24,
              borderColor: switchEnable ? Colors.yellow100 : "#707070",
              borderWidth: 1,
            }}
            circleStyle={{
              width: 24,
              height: 24,
              borderRadius: 12,
            }}
          />
        </View>

        <View style={[styles.itemContainer, { justifyContent: "space-between" }]}>
          <Text style={styles.text}>Offer Notifications</Text>
          <SwitchToggle
            switchOn={switchEnable}
            onPress={switchHandler}
            circleColorOff='#707070'
            circleColorOn={Colors.yellow100}
            backgroundColorOn='white'
            backgroundColorOff='white'
            containerStyle={{
              width: 48,
              height: 24,
              borderRadius: 24,
              borderColor: switchEnable ? Colors.yellow100 : "#707070",
              borderWidth: 1,
            }}
            circleStyle={{
              width: 24,
              height: 24,
              borderRadius: 12,
            }}
          />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.heading}>Account Actions</Text>
          <SvgXml xml={SettingsIcon} />
        </View>
        <View style={[styles.itemContainer, { justifyContent: "space-between" }]}>
          <Text style={[styles.text, { fontSize: 16 }]}>Logout</Text>
          <TouchableOpacity style={styles.statusContainer} onPress={LogoutHandler}>
            <HorizontalContainerWithIcon icon={Logout} text={"Logout"} />
          </TouchableOpacity>
        </View>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="You don't have any account"
          message="Please sign up !"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          messageStyle={{ color: Colors.deepBlue100 }}
          showConfirmButton={true}
          titleStyle={{ color: Colors.deepBlue100 }}
          confirmButtonTextStyle={{ color: Colors.deepBlue100, marginHorizontal: 8 }}
          // cancelText="No, cancel"
          confirmButtonStyle={{}}
          confirmText="ok"
          confirmButtonColor={Colors.yellow100}
          onCancelPressed={() => {
            hideAlert();
          }}
          onConfirmPressed={() => {
            hideAlert();
          }}
        />
        <Text style={[styles.text, { color: Colors.grey64 }]}>Log out of this account if you want to use switch accounts. Your data will not be deleted. But OTP verification is required to login again.</Text>
        <View style={[styles.itemContainer, { justifyContent: "space-between" }]}>
          <Text style={[styles.text, { color: Colors.pink100 }, { fontSize: 16 }]}>Delete my account</Text>
          <TouchableOpacity style={styles.statusContainer} onPress={deleteHandler}>
            <HorizontalContainerWithIcon icon={Delete} text={"Delete"} />
          </TouchableOpacity>
          <Modal isVisible={isModalVisible}>
            <View style={{ backgroundColor: "white", padding: 24, borderRadius: 24 }}>
              <Text style={styles.deleteText}>Are your sure want to delete your account?</Text>
              <View style={styles.deleteAccountContainer}>
                <ToggleButton state={deleteAccount} meal={deleteAccountHandler} />
                <Text style={styles.deleteFallbackText}>Yes, I want to delete my account and I know this action is irreversible.</Text>
              </View>
              <View style={styles.deleteInnerContainer}>
                <IconTextButton icon={Cancel} text={"Cancel"} onPress={() => { setModalVisible(false) }} />
                <IconTextButton icon={Delete} text={"Delete"} stylesFor={{ backgroundColor: Colors.grey44 }} stylesText={{ color: "white" }} onPress={() => {setModalVisible(false); navigation.navigate("signup"); }} />
              </View>
            </View>
          </Modal>
        </View>
        <Text style={[styles.text, { color: Colors.pink100 }]}>Permanently delete your account. This will delete all the data and this action is irreversible. </Text>
      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop:16,
    paddingHorizontal: 24,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16
  },
  heading: {
    color: Colors.deepBlue100,
    fontFamily: "ExtraBold",
    fontSize: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8
  },
  text: {
    fontFamily: "Regular",
    color: Colors.deepBlue100,
  },
  permissionText: {
    fontFamily: "Regular",
    color: Colors.deepBlue100,
    marginHorizontal: 16
  },
  statusContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    paddingHorizontal: 12,
  },
  deleteText: {
    color: Colors.pink200,
    fontFamily: "Bold",
    fontSize: 16
  },
  deleteAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 16
  },
  deleteFallbackText: {
    color: Colors.pink200,
    fontFamily: "Regular",
    marginLeft: 16
  },
  deleteInnerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 16,
  }
})