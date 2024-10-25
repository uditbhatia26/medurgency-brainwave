import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AiDetectionScreen from "./screens/AiDetectionScreen";
import ReportsScreen from "./screens/ReportsScreen";
import ChatBotScreen from "./screens/ChatBotScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="AiDetection" component={AiDetectionScreen}/>
        <Stack.Screen name="ReportsScreen" component={ReportsScreen}/>
        <Stack.Screen name="ChatBotScreen" component={ChatBotScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

