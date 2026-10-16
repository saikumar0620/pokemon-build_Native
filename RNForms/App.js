import { useState } from "react";
import { Button } from "react-native";
import { StyleSheet, Text, View, StatusBar,TextInput } from "react-native";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  const [name, setName] = useState("");
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        <Text> my name is{ name}</Text>
        <Button title="submit" />
      
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
  }
});
