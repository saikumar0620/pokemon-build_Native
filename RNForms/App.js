import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Switch,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isDarkMode, setDarkMode] = useState(false);
  const [errors, setErrors] = useState({})
  
  const validateForm=() => {
    let errors = {}
    if(!name)errors.name="user name is required"
    if (!password) errors.password = "password  is required"
    
    setErrors(errors)
    return Object.keys(errors).length === 0;
  }

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted:", { name, password });
      setName("")
      setPassword("")
      setErrors({})
    }
  };

  // Dynamic styles based on theme toggling
  const themeContainer = isDarkMode ? styles.darkContainer : styles.lightContainer;
  const themeCard = isDarkMode ? styles.darkCard : styles.lightCard;
  const themeText = isDarkMode ? styles.darkText : styles.lightText;
  const themeInput = isDarkMode ? styles.darkInput : styles.lightInput;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.safeArea, themeContainer]}>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
        
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          {/* Header Theme Switcher */}
          <View style={styles.header}>
            <Text style={[styles.themeLabel, themeText]}>
              {isDarkMode ? "Dark Mode" : "Light Mode"}
            </Text>
            <Switch
              value={isDarkMode}
              onValueChange={(value) => setDarkMode(value)}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isDarkMode ? "#2f80ed" : "#f4f3f4"}
            />
          </View>

          {/* Login Form */}
          <View style={[styles.form, themeCard]}>
            <Text style={[styles.title, themeText]}>Welcome Back</Text>
            
            <Text style={[styles.label, themeText]}>Username</Text>
            <TextInput
              style={[styles.input, themeInput]}
              placeholder="Enter your username"
              placeholderTextColor={isDarkMode ? "#aaa" : "#888"}
              value={name}
              onChangeText={setName}
              autoCapitalize="none"
            />
            {
              errors.name ? (<Text style={styles.errorText}>{ errors.name}</Text>):null
            }

            <Text style={[styles.label, themeText]}>Password</Text>
            <TextInput
              style={[styles.input, themeInput]}
              placeholder="Enter your password"
              placeholderTextColor={isDarkMode ? "#aaa" : "#888"}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
            {
              errors.password ?( <Text style={styles.errorText}>{ errors.password}</Text>):null
            }

            {/* Custom Styled Button */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit} activeOpacity={0.8}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: "#f8f9fa",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  themeLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
  form: {
    padding: 24,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  lightCard: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#eef1f6",
  },
  darkCard: {
    backgroundColor: "#1e1e1e",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 24,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
  lightText: {
    color: "#1a1a1a",
  },
  darkText: {
    color: "#ffffff",
  },
  input: {
    height: 48,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 16,
    borderRadius: 10,
    fontSize: 15,
  },
  lightInput: {
    borderColor: "#e0e0e0",
    backgroundColor: "#f9fbfd",
    color: "#000",
  },
  darkInput: {
    borderColor: "#333333",
    backgroundColor: "#2a2a2a",
    color: "#fff",
  },
  button: {
    height: 48,
    backgroundColor: "#2f80ed",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  errorText: {
    color: "red",
    marginBottom:10
  }
});
