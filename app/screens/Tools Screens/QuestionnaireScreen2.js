import React, { useState } from "react";
import { ScrollView, View, Text, StyleSheet, Button } from "react-native";
import { RadioButton } from "react-native-paper";

import { Colors } from "../../constants/Colors";
import QuestionnaireOptionsItem from "../../components/ToolsScreensComponents/QuestionnaireOptionsItem";
import { NavigationRouteContext } from "@react-navigation/native";

function QuestionnaireScreen2({ navigation }) {
  function submitButtonPressHandler() {
    console.log(answers);
    navigation.navigate("QuizStart");
  }

  const [answers, setAnswers] = useState({
    q8: "",
    q9: "",
    q10: "",
    q11: "",
    q12: "",
    q13: "",
    q14: "",
  });

  const handleAnswerChange = (question, value) => {
    setAnswers({ ...answers, [question]: value });
  };

  return (
    <View style={styles.rootContainer}>
      <ScrollView>
        <Text style={styles.title}>Questionnaire</Text>
        <Text style={styles.questionTitle}>How often does your child:</Text>

        {/* Question 8 */}
        <View style={styles.question}>
          <Text style={styles.questionText}>
            Writes a mixture of upper and lowercase letters?
          </Text>
          <RadioButton.Group
            onValueChange={(value) => handleAnswerChange("q8", value)}
            value={answers.q8}
          >
            <QuestionnaireOptionsItem />
          </RadioButton.Group>
        </View>

        {/* Question 9 */}
        <View style={styles.question}>
          <Text style={styles.questionText}>Resist writing tasks?</Text>
          <RadioButton.Group
            onValueChange={(value) => handleAnswerChange("q9", value)}
            value={answers.q9}
          >
            <QuestionnaireOptionsItem />
          </RadioButton.Group>
        </View>

        {/* Question 10 */}
        <View style={styles.question}>
          <Text style={styles.questionText}>Have difficulty copying text?</Text>
          <RadioButton.Group
            onValueChange={(value) => handleAnswerChange("q10", value)}
            value={answers.q10}
          >
            <QuestionnaireOptionsItem />
          </RadioButton.Group>
        </View>

        {/* Question 11 */}
        <View style={styles.question}>
          <Text style={styles.questionText}>
            Have difficulty with fine motor skills, such as buttoning a shirt or
            using scissors?
          </Text>
          <RadioButton.Group
            onValueChange={(value) => handleAnswerChange("q11", value)}
            value={answers.q11}
          >
            <QuestionnaireOptionsItem />
          </RadioButton.Group>
        </View>

        {/* Question 12 */}
        <View style={styles.question}>
          <Text style={styles.questionText}>
            Fully relies on vision to monitor what the hand is doing during
            writing?
          </Text>
          <RadioButton.Group
            onValueChange={(value) => handleAnswerChange("q12", value)}
            value={answers.q12}
          >
            <QuestionnaireOptionsItem />
          </RadioButton.Group>
        </View>

        {/* Question 13 */}
        <View style={styles.question}>
          <Text style={styles.questionText}>
            Does your child frequently confuse similar-looking letters, such as
            'b' 'd' ?
          </Text>
          <RadioButton.Group
            onValueChange={(value) => handleAnswerChange("q13", value)}
            value={answers.q13}
          >
            <QuestionnaireOptionsItem />
          </RadioButton.Group>
        </View>

        {/* Question 14 */}
        <View style={styles.question}>
          <Text style={styles.questionText}>
            Have difficulty remembering how to spell easy words they know
            verbally?
          </Text>
          <RadioButton.Group
            onValueChange={(value) => handleAnswerChange("q14", value)}
            value={answers.q14}
          >
            <QuestionnaireOptionsItem />
          </RadioButton.Group>
        </View>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Button
            title="Submit"
            color="#088cfc"
            onPress={submitButtonPressHandler}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default QuestionnaireScreen2;

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
