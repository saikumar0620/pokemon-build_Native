import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

import { View, Text } from 'react-native'
import React from 'react'
import DashBoardScreen from './screens/DashBoardScreen'
import ProfileScreen from './screens/ProfileScreen'
import CourseListScreen from './screens/CourseListScreen'
import SettingsScreen from './screens/SettingsScreen'

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* <Tab.Screen name="Dashboard" component={DashBoardScreen} />  */}
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Course List" component={CourseListScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}