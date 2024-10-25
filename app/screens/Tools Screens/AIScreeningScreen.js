import { StyleSheet, Text, View, Image } from "react-native";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  MediaTypeOptions,
} from "expo-image-picker";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";

import { Colors } from "../../constants/Colors";
import AIScreeningButton from "../../components/ToolsScreensComponents/AIScreeningButton";

function AIScreeningScreen({ navigation }) {
  // let imagePreview = pickedImage;

  async function takeImageHandler() {
    const image = await launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });
    // console.log(image.assets.at(0).uri);
    // setPickedImage(image.assets.at(0).uri);
    if (!image.canceled) {
      navigation.navigate("ImageConfirm", { image: image });
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
      navigation.navigate("ImageConfirm", { image: image });
    }
  }

  // let imagePreview = <Text style={styles.title}>No image taken yet.</Text>;

  // if (pickedImage) {
  //   console.log(pickedImage);
  //   imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screening Using AI</Text>
      <View style={styles.buttonsContainer}>
        <AIScreeningButton
          ImageType={Feather}
          imageName="camera"
          instruction="Take a Picture"
          onPress={takeImageHandler}
        />
        <View style={styles.verticalLine}></View>
        <AIScreeningButton
          ImageType={Entypo}
          imageName="upload"
          instruction="Upload a Picture"
          onPress={uploadImageHandler}
        />
      </View>
      {/* <View style={styles.imagePreview}>{imagePreview}</View> */}
    </View>
  );
}

export default AIScreeningScreen;

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
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 48,
    padding: 20,
    backgroundColor: "#111111",
    justifyContent: "center",
  },
  verticalLine: {
    borderRightWidth: 1,
    borderColor: "white",
    marginHorizontal: 20,
    height: 200,
  },
});
