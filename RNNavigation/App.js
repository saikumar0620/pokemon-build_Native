import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => (
            <Pressable
              onPress={() => alert("Menu Button pressed!")}
              style={{
                marginRight: 10,
                backgroundColor: "blue",
                padding: 8,
                borderRadius: 8,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Menu
              </Text>
            </Pressable>
          ),
          contentStyle: { backgroundColor: "#f2f2f2" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          
        />

        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{ name: "Hello, guest!" }}
          // options={({ route }) => ({
          //   title: route.params?.name ?? "WelcomeHome",
          // })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
