import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashBoardScreen from "./screens/DashBoardScreen";
import SettingsScreen from "./screens/SettingsScreen";
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Dashboard">
        <Drawer.Screen
          name="Dashboard"
          component={DashBoardScreen}
          options={{ title: "Dashboard" , drawerLabel: "My Dashboard" }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: "Settings" , drawerLabel: "Settings" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
