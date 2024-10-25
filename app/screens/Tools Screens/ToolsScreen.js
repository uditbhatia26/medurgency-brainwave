import { Button, StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Colors } from "../../constants/Colors";
import AssessmentDescriptionItem from "../../components/ToolsScreensComponents/AssessmentIDescriptionItem";

function ToolsScreen({ navigation }) {
  function continueButtonPressHandler() {
    navigation.navigate("AIScreening");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diagnosis Procedure</Text>
      <View style={styles.innerContainer}>
        <View style={styles.verticalLine}></View>
        <View>
          <View style={[styles.horizontalLine, { height: 42 }]}></View>
          <View style={[styles.horizontalLine, { height: 188 }]}></View>
          <View style={[styles.horizontalLine, { height: 183 }]}></View>
          <View style={[styles.horizontalLine, { height: 142 }]}></View>
        </View>
        <View>
          <AssessmentDescriptionItem
            title="Screening Using AI"
            ImageType={Feather}
            imageName="camera"
            description="Utilizing AI to analyze handwriting samples for characteristics like letter formation, spacing, alignment, and consistency. Highlight potential dysgraphia patterns and provide visual feedback to users."
          />
          <AssessmentDescriptionItem
            title="Questionnaire"
            ImageType={MaterialCommunityIcons}
            imageName="sticker-text-outline"
            description="Questionnaire helps gather valuable information about their child's writing abilities, behaviors, and challenges, which contributes to a more comprehensive assessment."
          />
          <AssessmentDescriptionItem
            title="Quizzes"
            ImageType={MaterialIcons}
            imageName="question-answer"
            description="Interactive quizzes designed for your child to further assess the likelihood of dysgraphia"
          />
          <AssessmentDescriptionItem
            title="Integrated results"
            ImageType={MaterialCommunityIcons}
            imageName="file-document-edit-outline"
            description="A clear summary of the user's assessment, including the overall findings and key indicators that suggest dysgraphia along with both strengths and areas needing improvement."
          />
        </View>
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

export default ToolsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: Colors.mainBg,
  },
  innerContainer: {
    flexDirection: "row",
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "900",
    marginHorizontal: 28,
    marginBottom: 10,
  },
  verticalLine: {
    borderRightWidth: 1,
    borderColor: "white",
    marginLeft: 30,
    height: 555,
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderColor: "white",
    paddingHorizontal: 20,
    height: 42,
  },
  buttonContainer: {
    marginTop: 12,
    alignSelf: "center",
    // height: 200,
  },
});
