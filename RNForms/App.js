import { useState } from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View, StatusBar,TextInput,Switch } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  const [name, setName] = useState("");
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput style={styles.input}
          value={name}
          onChangeText={setName}
          // secureTextEntry
          // keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
        
        />
         <TextInput style={[styles.input, styles.multilineInput]}
          value={name}
          onChangeText={setName}
          // secureTextEntry
          // keyboardType="number-pad"
          autoCorrect={false}
          autoCapitalize="none"
        
        />
        <Text> my name is{ name}</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>Dark mode</Text>
          <Switch value={isDarkMode}
            onValueChange={() => setDarkMode((previous) => !previous)}
            trackColor={{ false: "#817e83", true: "red" }}
          thumbColor="#f4f3f4"/>
        </View>
      
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    margin: 10,
    padding:5,
    borderColor: "red",
    borderWidth: 1,
  //  borderRadius: 
  },
  multilineInput: {
    minHeight: 100,
    
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-between",
    paddingHorizontal:10
  }
});
