import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import HorizontalContainerWithIcon from '../Cards/HorizontalContainerWithIcon'

const IconTextButton = ({ icon, text, stylesFor, stylesText, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, stylesFor]} onPress={onPress}>
      <HorizontalContainerWithIcon icon={icon} text={text} styless={[stylesText, { fontFamily: "ExtraBold" }]} />
    </TouchableOpacity>
  )
}

export default IconTextButton

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    padding: 4,
    alignSelf: "center",
    paddingHorizontal: 12,
    marginHorizontal: 8

  }
})