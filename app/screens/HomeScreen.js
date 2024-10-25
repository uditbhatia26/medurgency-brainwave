import { View, StyleSheet } from "react-native";

import SectionButton from "../components/HomeScreenComponents/SectionButton";
import AssessmentToolsLogo from "../assets/images/assessment_tools.svg";
import GuideLogo from "../assets/images/guide.svg";
import CommunityLogo from "../assets/images/community.svg";
import ConnectLogo from "../assets/images/connect.svg";
import { Colors } from "../constants/Colors";

function HomeScreen({ navigation }) {
  function assessmentToolsPressHandler() {
    navigation.navigate("Tools");
  }

  function guidePressHandler() {
    navigation.navigate("Guide");
  }

  function communityPressHandler() {
    navigation.navigate("Community");
  }

  function connectPressHandler() {
    navigation.navigate("Connect");
  }

  const imageSize = 100;

  return (
    <View style={styles.container}>
      {/* Assessment Tools */}

      <SectionButton
        sectionName="Assessment Tools"
        sectionDescription={
          "Quizzes, questionnaire and AI-powered dysgraphia detection"
        }
        onPress={assessmentToolsPressHandler}
      >
        <AssessmentToolsLogo width={imageSize} height={imageSize} />
      </SectionButton>

      {/* Guide */}

      <SectionButton
        sectionName="Guide"
        sectionDescription={
          "Dysgraphia is not related to intelligence but rather to neurological processing differences. Click to learn more about it"
        }
        onPress={guidePressHandler}
      >
        <GuideLogo width={imageSize} height={imageSize} />
      </SectionButton>

      {/* Community */}

      <SectionButton
        sectionName="Community"
        sectionDescription={
          "Read about other's experiences and how UpScript helped improve their children's learning"
        }
        onPress={communityPressHandler}
      >
        <CommunityLogo width={imageSize} height={imageSize} />
      </SectionButton>

      {/* Connect */}

      <SectionButton
        sectionName="Connect"
        sectionDescription={
          "Connect with therapists and NGOs near your location"
        }
        onPress={connectPressHandler}
      >
        <ConnectLogo width={imageSize} height={imageSize} />
      </SectionButton>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.mainBg,
  },
});
