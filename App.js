import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Switcher from "./src/components/ScreenManager";
import MainMenuScreen from "./src/screens/MainMenuScreen";
import GameScreen from "./src/screens/GameScreen";

export default function App() {
  const screens = {
    mainMenu: <MainMenuScreen />,
    game: <GameScreen />,
  }

  return (
    <SafeAreaView style={styles.container}>
      <Switcher screenMap={screens} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});