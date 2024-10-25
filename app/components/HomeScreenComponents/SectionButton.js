import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../../constants/Colors";

function SectionButton({ sectionName, sectionDescription, children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      onPress={onPress}
    >
      <View style={styles.sectionButton}>
        <View style={styles.imageContainer}>{children}</View>
        <View style={styles.textContainer}>
          <Text style={styles.sectionNameText}>{sectionName}</Text>
          <Text style={styles.sectionDescriptionText}>
            {sectionDescription}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default SectionButton;

const styles = StyleSheet.create({
  sectionButton: {
    flexDirection: "row",
    height: 150,
    width: 375,
    justifyContent: "center",
    overflow: "hidden",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 60,
    marginVertical: 8,
    borderColor: Colors.sectionButtonBorder,
    alignItems: "center",
  },
  textContainer: {
    height: 100,
    width: 200,
    justifyContent: "center",
    marginLeft: 15,
    // borderWidth: 1,
    // borderColor: "white",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "white",
    height: 100,
    width: 100,
  },
  sectionNameText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    // borderWidth: 1,
    // borderColor: "white",
  },
  sectionDescriptionText: {
    color: Colors.sectionButtonBorder,
    fontSize: 12,
    // borderWidth: 1,
    // borderColor: "white",
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
