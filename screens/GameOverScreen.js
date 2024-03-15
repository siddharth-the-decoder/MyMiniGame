import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNUmber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{" "}
        <Text style={styles.highlightText}>{roundsNUmber}</Text> rounds to guess
        the number
        <Text style={styles.highlightText}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;
const imageWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: imageWidth < 380 ? 150 : 300,
    height: imageWidth < 380 ? 150 : 300,
    borderRadius: imageWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
