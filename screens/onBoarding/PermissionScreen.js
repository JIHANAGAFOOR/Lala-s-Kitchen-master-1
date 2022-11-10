import { StyleSheet, View, ScrollView, Text, Dimensions } from 'react-native'
import React from 'react'
import PrimaryButton from '../../components/util/Buttons/PrimaryButton'
import SecondaryButton from '../../components/util/Buttons/SecondaryButton'
import { Colors } from '../../Constants/Color'
import InActiveButton from '../../components/util/Buttons/InActiveButton'
import LoadingOverlay from '../../components/util/LoadingOverlay'
import { useState } from 'react'
import { useEffect } from 'react'

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

const NumberVerfication = ({ navigation, style }) => {
  const [Loading, setLoading] = useState(false)
  const buttonhandler = () => {
    navigation.navigate('addressScreen')
  }
  const permissionbuttonhandler = () => {

  }
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    
  }, [])
  return (
    <View style={styles.container}>
      {/* {Loading &&
        <View style={{ justifyContent: "center", alignSelf: "center", alignContent: "center" }}>
          <LoadingOverlay />
        </View>} */}
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textHi}>Hi,</Text>
          <Text style={styles.fallbackText}>To ensure the smooth functioning of the app,we need some permission to work.</Text>
          <Text style={styles.fallbackText}>We need location permission to deliver the food to your house</Text>
          <PrimaryButton>Set location Permission</PrimaryButton>
          <Text style={styles.fallbackText}>Phone permission is to contact you to deliver</Text>
          <PrimaryButton>Set Phone Permission</PrimaryButton>
        </View>

        <View style={{ flex: 2 }}>
          <InActiveButton onPress={buttonhandler} styless={{ backgroundColor: Colors.grey64 }}>
            <Text style={{ color: "white" }}>Continue</Text>
          </InActiveButton>
          <SecondaryButton onPress={permissionbuttonhandler} styless={styles.buttonContainer}><Text style={{ fontFamily: 'Bold' }}>Set All Permissions</Text></SecondaryButton>
        </View>
      </ScrollView>
    </View>
  )
}

export default NumberVerfication

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  scrollViewContainer: {
    flex: 1,
    padding: 24,

  },
  textContainer: {
    flex: 6,

  },
  backButton: {
    color: "black"
  },
  text: {
    fontWeight: 'bold',
    // fontSize:15,

  },
  textHi: {
    fontFamily: 'ExtraBold',
    fontSize: 24,
    textAlign: "left",
    marginTop: screenHeight / 24,
    color: Colors.deepBlue100
  },
  fallbackText: {
    marginTop: '10%',
    fontFamily: 'Regular',
    textAlign: 'justify',
    marginVertical: 4,
    color: Colors.deepBlue100
  },
  buttonContainer: {
  }
})