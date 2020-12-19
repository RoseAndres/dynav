import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const MainMenuScreen = ({ goToScreen }) => {
  return (
    <View style={styles.container}>
      <Text>Main Menu</Text>
      <Button title="Play Game" onPress={() => goToScreen("game")}/>
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
