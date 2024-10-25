import { StyleSheet, View, Text } from "react-native";

function AssessmentDescriptionItem({
  title,
  description,
  ImageType,
  imageName,
}) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.innerContainer}>
        <ImageType
          name={imageName}
          size={48}
          color="white"
          style={styles.image}
        />
        <Text style={styles.heading}>{title}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

export default AssessmentDescriptionItem;

styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: 48,
    // borderWidth: 1,
    // borderColor: "white",
    marginLeft: 8,
    width: 300,
  },
  innerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  heading: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  description: {
    color: "white",
    fontSize: 14,
    padding: 8,
    alignSelf: "flex-start",
  },
  image: {
    borderWidth: 2,
    borderColor: "white",
    textAlign: "center",
    padding: 8,
    margin: 8,
  },
});
