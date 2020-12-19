import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const GameScreen = ({ setScreen }) => {
  return (
    <View style={styles.container}>
      <Text>We're playing a game!!!</Text>
      <Button title="Main Menu" onPress={() => setScreen("mainMenu")} color="red" />
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
