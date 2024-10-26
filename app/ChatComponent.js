import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ChatbotScreen = () => {
  const [userQuery, setUserQuery] = useState("");
  const [responseText, setResponseText] = useState("");

  const submitQuery = async () => {
    try {
      const response = await fetch(
        "https://api.on-demand.io/chat/v1/sessions/671c223f2f98c98064c65842/query",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: "6VW8hjNJYhZ6P3eGK2uNgXTe2NmFKtxD", // Replace with your actual API key
          },
          body: JSON.stringify({
            endpointId: "predefined-openai-gpt4o",
            query: userQuery,
            pluginIds: [],
            responseMode: "sync",
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setResponseText(data.data?.answer || "No answer available");
      } else {
        setResponseText(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      setResponseText("An error occurred while fetching the response.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ask me something..."
        value={userQuery}
        onChangeText={setUserQuery}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={submitQuery}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <Text style={styles.response}>{responseText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#982b2b", // Light pink background color
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "#ffffff",
    padding: 10,
    marginBottom: 10,
    width: "100%",
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#ffcc99", // Orange color for button
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  response: {
    color: "#000000",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
});

export default ChatbotScreen;
