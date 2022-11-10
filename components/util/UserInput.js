import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../Constants/Color'

const UserInput = ({ keyboardType, placeholder, onChange, value, maxLength, focusHandler, styless }) => {
  const [focus, setFocus] = useState(false)

  const mainFocus = () => {
    handleFocus();
    focusHandler();
  }
  function handleFocus() {
    setFocus(true)
  }
  const handleBlur = () => {
    setFocus(false)
  }
  return (
    // <View >
    <TextInput style={[styles.input,styless,
    { borderColor: focus ? Colors.yellow100 : Colors.deepBlue10 }]}
      onFocus={mainFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
      mode='outlined'
      onChangeText={onChange}
      value={value}
      name="name"
      keyboardType={keyboardType}
      maxLength={maxLength}
    />
    // </View>
  )
}

export default UserInput
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  input: {
    borderRadius: 16,
    backgroundColor: Colors.deepBlue4,
    borderWidth: 1,
    marginVertical: 8,
    padding: height / 70,
    elevation: 2,
    shadowColor: Colors.grey100,
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 4 },
    shadowRadius: 2,
    fontFamily: 'Regular',
    color: Colors.deepBlue100
  },
})