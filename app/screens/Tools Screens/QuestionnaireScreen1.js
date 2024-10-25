import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Button } from "react-native";
import { RadioButton } from "react-native-paper";

import { Colors } from "../../constants/Colors";
import QuestionnaireOptionsItem from "../../components/ToolsScreensComponents/QuestionnaireOptionsItem";

function QuestionnaireScreen1({ navigation }) {
  function nextButtonPressHandler() {
    console.log(answers);
    navigation.navigate("Questionnaire2");
  }

  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
  });

  const handleAnswerChange = (question, value) => {
    setAnswers({ ...answers, [question]: value });
  };

  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        <Text style={styles.title}>Questionnaire</Text>
        <Text style={styles.questionTitle}>How often does your child:</Text>

        {/* Question 1 */}
        <View style={styles.question}>
          <Text style={styles.questionText}>
            Have cramped fingers on writing tool?
          </Text>
          <RadioButton.Group
            onValueChange={(value) => handleAnswerChange("q1", value)}
            value={answers.q1}
          >
            <QuestionnaireOptionsItem />
          </RadioButton.Group>
        </View>

        {/* Question 2 */}
        <View style={styles.question}>
          <Text style={styles.questionText}>
            Have slant and inconsistent letter formations?
          </Text>
          <RadioButton.Group
            onValueChange={(value) => handleAnswerChange("q2", value)}
            value={answers.q2}
          >
            <QuestionnaireOptionsItem />
          </RadioButton.Group>
        </View>

        {/* Question 3 */}
        <View style={styles.question}>
          <Text style={styles.questionText}>
            Have a decreased or very slow speed of writing?
          </Text>
          <RadioButton.Group
            onValueChange={(value) => handleAnswerChange("q3", value)}
            value={answers.q3}
          >
            <QuestionnaireOptionsItem />
          </RadioButton.Group>
        </View>

        {/* Question 4 */}
        <View style={styles.question}>
          <Text style={styles.questionText}>Have messy handwriting?</Text>
          <RadioButton.Group
            onValueChange={(value) => handleAnswerChange("q4", value)}
            value={answers.q4}
          >
            <QuestionnaireOptionsItem />
          </RadioButton.Group>
        </View>

        {/* Question 5 */}
        <View style={styles.question}>
          <Text style={styles.questionText}>
            Reverses numbers? (e.g., 81 for 18)
          </Text>
          <RadioButton.Group
            onValueChange={(value) => handleAnswerChange("q5", value)}
            value={answers.q5}
          >
            <QuestionnaireOptionsItem />
          </RadioButton.Group>
        </View>

        {/* Question 6 */}
        <View style={styles.question}>
          <Text style={styles.questionText}>Write letters backwards?</Text>
          <RadioButton.Group
            onValueChange={(value) => handleAnswerChange("q6", value)}
            value={answers.q6}
          >
            <QuestionnaireOptionsItem />
          </RadioButton.Group>
        </View>

        {/* Question 7 */}
        <View style={styles.question}>
          <Text style={styles.questionText}>
            Have a frequent need for verbal cues and use of subvocalizing?
          </Text>
          <RadioButton.Group
            onValueChange={(value) => handleAnswerChange("q7", value)}
            value={answers.q7}
          >
            <QuestionnaireOptionsItem />
          </RadioButton.Group>
        </View>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Button
            title="Next"
            color="#088cfc"
            onPress={nextButtonPressHandler}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default QuestionnaireScreen1;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: Colors.mainBg,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "white",
    alignSelf: "center",
    marginBottom: 12,
    marginTop: 24,
    textAlign: "center",
  },
  questionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 16,
    color: "white",
    marginLeft: 24,
  },
  question: {
    marginBottom: 24,
    color: "white",
    marginLeft: 36,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 8,
    color: "white",
  },
  submitButton: {
    marginTop: 24,
  },
});
