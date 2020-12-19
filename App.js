import React, { useState } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenManager from "./src/components/ScreenManager";
import MainMenuScreen from "./src/screens/MainMenuScreen";
import GameScreen from "./src/screens/GameScreen";

export default function App() {
  const screens = {
    mainMenu: <MainMenuScreen />,
    game: <GameScreen />,
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScreenManager screenMap={screens} defaultScreenKey={"mainMenu"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});