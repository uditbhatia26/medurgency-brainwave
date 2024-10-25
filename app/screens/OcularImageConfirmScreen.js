import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

function OcularImageConfirmScreen({ navigation, route }) {
  imageObject = route.params.image;
  imagePath = imageObject.assets.at(0).uri;
  console.log(imageObject);

  function continueButtonPressHandler() {
    console.log("Hello");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OCULAR IMAGE RECOGNITION</Text>
      <View style={styles.imagePreview}>
        <Image style={styles.image} source={{ uri: imagePath }} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          title="Continue Analysis"
          color="#088cfc"
          onPress={continueButtonPressHandler}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OcularImageConfirmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e67171",
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
  },
  imagePreview: {
    width: "100%",
    height: 600,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: "#cccccc",
    // borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  buttonContainer: {
    alignSelf: "center",
    // height: 200,
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 32,
    color: "#0f0f0f",
    fontWeight: "800",
    textAlign: "center",
  },
});
