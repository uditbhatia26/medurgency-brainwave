import { StyleSheet, View, Text, Button } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Colors } from "../../constants/Colors";

function QuizStartScreen({ navigation }) {
  function startQuizButtonPressHandler() {
        navigation.navigate("Quiz")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz for your child</Text>
      <MaterialIcons
        name="question-answer"
        size={96}
        color="#088cfc"
        style={styles.image}
      />
      <Text style={styles.subtitle}>
        Encourage your child to complete the quiz section. Let them take their
        time and do their best to ensure the most accurate results.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Start Quiz"
          color="#088cfc"
          onPress={startQuizButtonPressHandler}
        />
      </View>
    </View>
  );
}

export default QuizStartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.mainBg,
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    color: "white",
  },
  image: {
    borderWidth: 3,
    borderColor: "white",
    textAlign: "center",
    alignSelf: "center",
    margin: 48,
    paddingTop: 12,
    paddingHorizontal: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "400",
    color: "white",
    textAlign: "center",
    marginHorizontal: 48,
  },
  buttonContainer: {
    paddingTop: 96,
  },
});
