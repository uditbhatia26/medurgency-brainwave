import { View, Text, StyleSheet, Pressable } from "react-native";

import OcularLogo from "../assets/images/ocular.svg";

function AiDetectionScreen(){
  function Test(){console.log("hello")}

  return(
    <View style={styles.container}>
      <Text style={styles.headText}>
        AI DETECTION
      </Text>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.detectionContainer}
          onPress={Test}
        >
          <OcularLogo width={125} height={125}/>
          <View style={styles.textContainer}>
            <Text style={styles.buttonLabel}>OCULAR RECOGNITION</Text>
            <Text style={styles.summaryText}>Detect diseases using AI algorithms</Text>
          </View>
        </Pressable>
        <Pressable 
          style={styles.reportsContainer}
          onPress={Test}
        >
          <OcularLogo width={125} height={125}/>
          <View style={styles.textContainer}>
            <Text style={styles.buttonLabel}>PNEUMONIA DETECTION</Text>
            <Text style={styles.summaryText}>Store and manage all patient medical reports</Text>
          </View>
        </Pressable>
        <Pressable 
          style={styles.chatBotContainer} 
          onPress={Test}
        >
          <OcularLogo width={125} height={125}/>
          <View style={styles.textContainer}>
            <Text style={styles.buttonLabel}>CARDIO VASCULAR DISEASE PREDICTION</Text>
            <Text style={styles.summaryText}>Interact with the virtual medical assistant</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

export default AiDetectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e67171',
    alignItems: 'center',
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
    marginTop: 30,
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
    height: 200,
    width: 200,
    justifyContent: "center",
    marginRight: 25,
  },
  buttonLabel: {
    fontSize: 28,
    color: "#ffffff",
    fontWeight: "500",
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
