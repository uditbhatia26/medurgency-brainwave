import { StyleSheet, View, Text, Image, Button } from "react-native";

import { Colors } from "../../constants/Colors";

function ImageConfirmScreen({ navigation, route }) {
  imageObject = route.params.image;
  imagePath = imageObject.assets.at(0).uri;
  console.log(imageObject);

  function continueButtonPressHandler() {
    navigation.navigate("Questionnaire1");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screening Using AI</Text>
      <View style={styles.imagePreview}>
        <Image style={styles.image} source={{ uri: imagePath }} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Continue Analysis"
          color="#088cfc"
          onPress={continueButtonPressHandler}
        />
      </View>
    </View>
  );
}

export default ImageConfirmScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.mainBg,
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "white",
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
    marginTop: 36,
    alignSelf: "center",
    // height: 200,
  },
});
