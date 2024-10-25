import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { Colors } from "./constants/Colors";
import HomeScreen from "./screens/HomeScreen";
import ToolsScreen from "./screens/Tools Screens/ToolsScreen";
import GuideScreen from "./screens/GuideScreen";
import CommunityScreen from "./screens/CommunityScreen";
import ConnectScreen from "./screens/ConnectScreen";
import AIScreeningScreen from "./screens/Tools Screens/AIScreeningScreen";
import ImageConfirmScreen from "./screens/Tools Screens/ImageConfirmScreen";
import QuestionnaireScreen1 from "./screens/Tools Screens/QuestionnaireScreen1";
import QuestionnaireScreen2 from "./screens/Tools Screens/QuestionnaireScreen2";
import Quiz from "./screens/Quiz";
import QuizStartScreen from "./screens/Tools Screens/QuizStartScreen";
import QuizCompletionScreen from "./screens/Tools Screens/QuizCompletionScreen";
import ReportViewScreen from "./screens/Tools Screens/ReportViewScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ToolsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      // initialRouteName="Quiz"
    >
      <Stack.Screen name="ToolsStart" component={ToolsScreen} />
      <Stack.Screen name="AIScreening" component={AIScreeningScreen} />
      <Stack.Screen name="ImageConfirm" component={ImageConfirmScreen} />
      <Stack.Screen name="Questionnaire1" component={QuestionnaireScreen1} />
      <Stack.Screen name="Questionnaire2" component={QuestionnaireScreen2} />
      <Stack.Screen name="QuizStart" component={QuizStartScreen} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="QuizCompletion" component={QuizCompletionScreen} />
      <Stack.Screen name="ReportView" component={ReportViewScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.bottomTabBg,
          },
          tabBarActiveTintColor: "white",
        }}
        initialRouteName="Home"
      >
        {/* Tools */}

        <Tab.Screen
          name="Tools"
          component={ToolsStackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="magnify-scan"
                color={color}
                size={size}
              />
            ),
            tabBarActiveTintColor: "white",
          }}
        />

        {/* Guide */}

        <Tab.Screen
          name="Guide"
          component={GuideScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),
            tabBarActiveTintColor: "white",
          }}
        />

        {/* Home */}

        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />

        {/* Community */}

        <Tab.Screen
          name="Community"
          component={CommunityScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="group" color={color} size={size} />
            ),
          }}
        />

        {/* Connect */}

        <Tab.Screen
          name="Connect"
          component={ConnectScreen}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome6 name="shuffle" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
