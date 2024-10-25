import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
} from "expo-image-picker";

import PneumoniaDetectLogo from "../assets/images/pneumonia_detect.svg";
import CameraLogo from "../assets/images/camera.svg";
import Xray1 from "../assets/images/xray_1.svg";
import Xray2 from "../assets/images/xray_2.svg";

function PneumoniaDetectionScreen({ navigation }) {
  async function takeImageHandler() {
    const image = await launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });
    // console.log(image.assets.at(0).uri);
    // setPickedImage(image.assets.at(0).uri);
    if (!image.canceled) {
      navigation.navigate("PneumoniaImageConfirm", { image: image });
    }
  }

  async function uploadImageHandler() {
    const image = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    // console.log(image.assets.at(0).uri);
    // setPickedImage(image.assets.at(0).uri);
    if (!image.canceled) {
      navigation.navigate("PneumoniaImageConfirm", { image: image });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>PNEUMONIA DETECTION</Text>
      <View style={styles.ocularRecogLogoContainer}>
        <PneumoniaDetectLogo />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={uploadImageHandler}
        >
          <View style={styles.cameraLogoContainer}>
            <CameraLogo />
          </View>
          <Text style={styles.buttonText}>UPLOAD IMAGE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.uploadButton}
          onPress={takeImageHandler}
        >
          <View style={styles.cameraLogoContainer}>
            <CameraLogo />
          </View>
          <Text style={styles.buttonText}>TAKE IMAGE</Text>
        </TouchableOpacity>
        <Text style={styles.descriptionText}>
          AI analyzes X-ray images to detect potential Pneumonia
        </Text>
        <View style={styles.sampleImageContainer}>
          <View style={{ flexDirection: "row" }}>
            <Xray1 />
            <View style={{ width: 50 }}></View>
            <Xray2 />
          </View>
          <Text style={styles.sampleImageTextContainer}>SAMPLE X-RAYS</Text>
        </View>
      </View>
    </View>
  );
}

export default PneumoniaDetectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e67171",
    alignItems: "center",
  },
  headText: {
    fontSize: 32,
    color: "#ffffff",
    fontWeight: "600",
    marginTop: 18,
    textAlign: "center",
  },
  ocularRecogLogoContainer: {
    marginTop: 20,
  },
  buttonsContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    flex: 1,
    width: 375,
    marginTop: -40,
    borderRadius: 50,
    marginBottom: 25,
    paddingVertical: 20,
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  uploadButton: {
    backgroundColor: "#ff9f68",
    padding: 15,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    elevation: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    height: 107,
    justifyContent: "space-evenly",
    width: 350,
  },
  buttonText: {
    fontSize: 32,
    color: "#fff",
    fontWeight: "800",
    textAlign: "center",
  },
  cameraLogoContainer: {
    backgroundColor: "white",
    borderRadius: 100,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  descriptionText: {
    fontWeight: "600",
    fontSize: 28,
    textAlign: "center",
  },
  sampleImageContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    width: 350,
    marginTop: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    elevation: 8,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    height: 175,
  },
  sampleImageTextContainer: {
    fontWeight: "600",
    fontSize: 28,
    textAlign: "center",
  },
});
