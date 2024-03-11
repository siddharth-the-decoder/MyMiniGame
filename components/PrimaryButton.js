import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Hell");
  }
  return (
    <View style={styles.buttonOuter}>
      <Pressable
        style={styles.buttonContainer}
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuter: {
    borderRadius: 28,
    overflow: "hidden",
    margin: 4,
  },
  buttonContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
