import { View, Text, StyleSheet, Button } from "react-native";

const CourseListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CourseListScreen</Text>
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Dashboard" onPress={() => navigation.jumpTo("Dashboard")} />
    </View>
  );
};

export default CourseListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});