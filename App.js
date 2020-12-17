import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useScreen from './src/hooks/useScreen';

export default function App() {
  const screenContext = React.createContext();

  const screens = {
    mainMenu: "Main Menu",
    game: "Game",
  }

  const [screenMap, setScreenMap] = useState(screens);
  const [screen, setScreen] = useScreen("mainMenu", screenMap);
  

  function toggleGame() {
    if (screenMap.game) {
      let newScreens = {...screenMap};

      if (screenMap.game === "Game") {
        newScreens.game = "Game Over";
      } else {
        newScreens.game = "Game";
      }
  
      setScreenMap(newScreens);
    }
  }

  function addScreen(screenKey, screenContent) {
    let newScreens = {...screenMap}
    newScreens[screenKey] = screenContent;
    setScreenMap(newScreens);
  }

  function removeScreen(screenName) {
    let newScreens = {...screenMap};

    if (screenName) {
      delete newScreens[screenName];
    } else {
      // remove the last element
      delete newScreens[Object.keys(newScreens).slice(-1)[0]];
    }
    
    setScreen(newScreens[Object.keys(newScreens).slice(-1)[0]])
    setScreenMap(newScreens);
  }

  return (
    <SafeAreaView style={styles.container}>
      <screenContext.Provider value={[screen, setScreen]}>
        <Text>{ screen }</Text>
        {
          Object.keys(screenMap).map((screenKey, index) => (
            <Button key={screenKey} title={screenMap[screenKey]} onPress={() => setScreen(screenKey)} />
          ))
        }
        <Button title={"Toggle Game/Game Over"} onPress={toggleGame} />
        <Button title={"Add Screen"} onPress={() => addScreen(`${Object.keys(screenMap).length}`, `${Object.keys(screenMap).length}`)} />
        <Button title={"Remove Screen"} onPress={() => removeScreen()} />
      </screenContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
