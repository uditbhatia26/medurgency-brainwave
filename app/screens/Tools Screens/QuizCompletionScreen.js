import { StyleSheet, View, Text, Button } from "react-native";

import { Colors } from "../../constants/Colors";
import AppLogo from "../../assets/images/logo.svg";

function QuizCompletionScreen({ navigation }) {
  function continueButtonPressHandler() {
    navigation.navigate("ReportView");
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <AppLogo width={256} height={256} />
      </View>
      <Text style={styles.title}>Well Done!</Text>
      <Text style={styles.title}>You've Completed the Quiz!</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Click Here to Continue"
          color="#088cfc"
          onPress={continueButtonPressHandler}
        />
      </View>
    </View>
  );
}

export default QuizCompletionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.mainBg,
  },
  imageContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "white",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 128,
  },
});
