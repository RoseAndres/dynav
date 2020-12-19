 import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const MainMenuScreen = ({ setScreen }) => {
  return (
    <View style={styles.container}>
      <Text>Main Menu</Text>
      <Button title="Play Game" onPress={() => setScreen("game")}/>
    </View>
  )
}

export default MainMenuScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
