import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react'
import PrimaryButton from '../../components/util/Buttons/PrimaryButton'
import { Colors } from '../../Constants/Color'
import LoadingOverlay from '../../components/util/LoadingOverlay'
import SecondaryButton from '../../components/util/Buttons/SecondaryButton'
import { useSelector } from 'react-redux'
const image = require('../../assets/BackgroundImage.jpg')

const WelcomeScreen = ({ navigation }) => {
  const [Loading, setLoading] = useState(null)
  const [data, setData] = useState(image)
  var user = useSelector(state => state.user.otpUser)
  function onLoading(value, label) {
    setLoading(value)
  }
  const buttonhandler = () => {
    navigation.navigate('main')
  }
  const newSubscriptionHandler = () => {
    navigation.navigate('numberVerification')
  }
  return (
    <View style={styles.container}>
      {Loading &&
        <View style={{ justifyContent: "center", alignSelf: "center", alignContent: "center" }}>
          <LoadingOverlay />
        </View>}
      <View style={{ flex: 1 }}>

        {<ImageBackground
          onLoadStart={() => onLoading(true, 'onLoadStart')}

          onLoadEnd={() => onLoading(false, 'onLoadEnd')}
          source={data} style={styles.backgroundImage}
          resizeMode="cover"
          imageStyle={styles.backgroundImageStyle}>
          <Text style={styles.exit}>Exit</Text>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Lala's Kitchen</Text>
          </View>
          <PrimaryButton onPress={buttonhandler}>Home</PrimaryButton>
          <SecondaryButton onPress={newSubscriptionHandler}>Setup New Subscription</SecondaryButton>
        </ImageBackground>}
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.greyBlack,
  },
  backgroundImage: {
    flex: 1,
    padding: 24,

  },
  backgroundImageStyle: {
    opacity: 0.5
  },

  textContainer: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",

  },
  text: {
    fontSize: 36,
    color: Colors.yellow100,
    textAlign: "center",
    fontFamily: "ExtraBold"
  },
  exit: {
    textAlign: "right",
    margin: 8,
    color: Colors.greyWhite,
    fontSize: 16,
    fontFamily: "Regular"
  }
})