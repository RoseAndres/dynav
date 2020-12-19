import { StyleSheet } from "react-native";

const GameScreen = ({ switcher }) => {
  return (
    <View style={styles.container}>
      <Text>We're playing a game!!!</Text>
      <Button
        title="Main Menu"
        onPress={() => switcher.switchTo("mainMenu")}
        color="red"
      />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
