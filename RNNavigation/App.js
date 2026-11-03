import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@react-native-vector-icons/ionicons';


import React from 'react'
import DashBoardScreen from './screens/DashBoardScreen'
import ProfileScreen from './screens/ProfileScreen'
import CourseListScreen from './screens/CourseListScreen'
import SettingsScreen from './screens/SettingsScreen'
import AboutScreen from './screens/AboutScreen';
import AppStack from './AppStack';
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        // tabBarLabelPosition: 'beside-icon',
        tabBarShowLabel: true,
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 18, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#eee6e6' }
      }}>


        <Tab.Screen name="Dashboard" component={DashBoardScreen} options={{
          tabBarLabel: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          )}}/> 
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: "My Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
          tabBarBadge: 4,
          }}/>
        <Tab.Screen name="Course List" component={CourseListScreen} options={{
          tabBarLabel: "Course List",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" color={color} size={size} />
          )
        }} />
        <Tab.Screen name="Settings" component={SettingsScreen}  options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          )
        }} />
        

        <Tab.Screen name="AboutStack" component={AppStack}  options={{
          tabBarLabel: "About",
          headerShown: false ,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" color={color} size={size} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
