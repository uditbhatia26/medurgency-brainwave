import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AiDetectionScreen from "./screens/AiDetectionScreen";
import ReportsScreen from "./screens/ReportsScreen";
import ChatBotScreen from "./screens/ChatBotScreen";
import OcularRecognitionScreen from "./screens/OcularRecognitionScreen";
import OcularImageConfirmScreen from "./screens/OcularImageConfirmScreen";
import PneumoniaDetectionScreen from "./screens/PneumoniaDetectionScreen";
import PneumoniaImageConfirmScreen from "./screens/PneumoniaImageConfirmScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AiDetection" component={AiDetectionScreen} />
        <Stack.Screen name="ReportsScreen" component={ReportsScreen} />
        <Stack.Screen name="ChatBotScreen" component={ChatBotScreen} />
        <Stack.Screen
          name="OcularRecognition"
          component={OcularRecognitionScreen}
        />
        <Stack.Screen
          name="OcularImageConfirm"
          component={OcularImageConfirmScreen}
        />
        <Stack.Screen
          name="PneumoniaDetection"
          component={PneumoniaDetectionScreen}
        />
        <Stack.Screen
          name="PneumoniaImageConfirm"
          component={PneumoniaImageConfirmScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
