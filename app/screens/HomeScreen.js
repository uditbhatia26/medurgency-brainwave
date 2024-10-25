import DoctorsLogo from "../assets/images/doctors.svg";
import AiDetectionLogo from "../assets/images/ai_detection.svg";
import ReportLogo from "../assets/images/report.svg";
import ChatBotLogo from "../assets/images/chat_bot.svg";

import { StyleSheet, Text, View, Pressable} from 'react-native';
import { StatusBar } from "expo-status-bar";


function HomeScreen({navigation}){
  function AiDetectionPressHandler(){
    navigation.navigate("AiDetection");
  }

  function ReportsPressHandler(){
    navigation.navigate("ReportsScreen");
  }

  function ChatBotPressHandler(){
    navigation.navigate("ChatBotScreen");
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {/* <Text style={styles.headText}>
        HOME
      </Text> */}
      <View style={styles.doctorLogoContainer}>
        <DoctorsLogo height={264} width={247}/>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.detectionContainer}
          onPress={AiDetectionPressHandler}
        >
          <AiDetectionLogo width={125} height={125}/>
          <View style={styles.textContainer}>
            <Text style={styles.buttonLabel}>AI DETECTION</Text>
            <Text style={styles.summaryText}>Detect diseases using AI algorithms</Text>
          </View>
        </Pressable>
        <Pressable 
          style={styles.reportsContainer}
          onPress={ReportsPressHandler}
        >
          <ReportLogo width={125} height={125}/>
          <View style={styles.textContainer}>
            <Text style={styles.buttonLabel}>REPORTS</Text>
            <Text style={styles.summaryText}>Store and manage all patient medical reports</Text>
          </View>
        </Pressable>
        <Pressable 
          style={styles.chatBotContainer} 
          onPress={ChatBotPressHandler}
        >
          <ChatBotLogo width={125} height={125}/>
          <View style={styles.textContainer}>
            <Text style={styles.buttonLabel}>CHATBOT</Text>
            <Text style={styles.summaryText}>Interact with the virtual medical assistant</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e67171',
    alignItems: 'center',
  },
  doctorLogoContainer: {
    // marginTop: 22,
  },
  headText: {
    fontSize: 32,
    color: "#ffffff",
    fontWeight: "700",
    marginTop: 18
  },
  buttonsContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    flex: 1,
    width: 375, 
    marginTop: -70,
    borderRadius: 50,
    marginBottom: 25,
    paddingVertical: 20,
    justifyContent: "space-evenly",
  },
  chatBotContainer: {
    backgroundColor: "rgba(7, 86, 224, 0.5)",
    marginVertical: 10,
    borderRadius: 30,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems:'center',
    height: 175,
  },
  reportsContainer: {
    backgroundColor: "rgba(27, 181, 94, 0.5)",
    marginVertical: 10,
    borderRadius: 30,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems:'center',
    height: 175,
  },
  detectionContainer: {
    backgroundColor: "rgba(255, 102, 0, 0.5)",
    marginVertical: 10,
    borderRadius: 30,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems:'center',
    height: 175,
  },
  textContainer: {
    height: 100,
    width: 200,
    justifyContent: "center",
    marginRight: 25,
  },
  buttonLabel: {
    fontSize: 28,
    color: "#ffffff",
    fontWeight: "600",
    textAlign: "center",
  },
  summaryText: {
    fontSize: 16,
    color: '#6e6d6d',
    marginTop: 8,
    textAlign: 'center',
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
