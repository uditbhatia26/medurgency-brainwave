import { Pressable, StyleSheet, Text, View } from "react-native";

function AIScreeningButton({ onPress, ImageType, imageName, instruction }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}
      >
        <ImageType name={imageName} size={128} color="white" />
        <Text style={styles.instructionText}>{instruction}</Text>
      </Pressable>
    </View>
  );
}

export default AIScreeningButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  instructionText: {
    color: "white",
    fontSize: 18,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
