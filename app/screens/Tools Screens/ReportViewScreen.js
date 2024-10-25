import { StyleSheet, Text, View, Button } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Colors } from "../../constants/Colors";

function ReportViewScreen({ navigation }) {
  function reportCheckButtonPressHandler() {
    console.log("PRESSED");
  }
  function guideViewButtonPressHandler() {
    console.log("PRESSED");
  }
  function aboutUpscriptButtonPressHandler() {
    console.log("PRESSED");
  }

  return (
    <View style={styles.container}>
      <AntDesign name="clouduploado" size={128} color="#088cfc" />
      <Text style={styles.subtitle}>Uploaded Successfully!</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Check the Report"
            color="#088cfc"
            onPress={reportCheckButtonPressHandler}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Check Out Parent's Guide"
            color="#088cfc"
            onPress={guideViewButtonPressHandler}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="About Upscript"
            color="#088cfc"
            onPress={aboutUpscriptButtonPressHandler}
          />
        </View>
      </View>
    </View>
  );
}

export default ReportViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.mainBg,
  },
  subtitle: {
    color: "#cccccc",
    fontSize: 24,
  },
  buttonContainer: {
    marginTop: 36,
  },
  buttonsContainer: {
    marginTop: 48,
    paddingTop: 48,
  },
});
