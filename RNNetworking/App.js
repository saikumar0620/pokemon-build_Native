import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
  Platform,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setisPosting] = useState(false);
  const [error, setError] = useState(false);

  const fetchdata = async (limit = 10) => {
    try {
      const resonse = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
      );
      const data = await resonse.json();
      setPostList(data);
      setIsLoading(false);
    } catch (error) {
      console.error("error fetching data:",error);
      setIsLoading(false);
      setError("failed to fetch post list");
    }
  };
  const handleRefresh = () => {
    setRefreshing(true);
    fetchdata(20);
    setRefreshing(false);
  };

  const addPost = async () => {
    try {
      setisPosting(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            title: postTitle,
            body: postBody,
          }),
        },
      );
      const newPost = await response.json();
      setPostList([newPost, ...postList]);
      setPostTitle("");
      setPostBody("");
      setisPosting(false);
      setError("")
    } catch (error) {
      console.error("error adding new post",error)
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="red" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : (
          <>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="post title"
                value={postTitle}
                onChangeText={setPostTitle}
              />
              <TextInput
                style={styles.input}
                placeholder="post body"
                value={postBody}
                onChangeText={setPostBody}
              />
              <Button
                title={isPosting ? "Adding..." : "Add post"}
                onPress={addPost}
                disabled={isPosting}
              />
            </View>
            <View style={styles.listContainer}>
              <FlatList
                data={postList}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.card}>
                      <Text style={styles.titleText}>{item.title}</Text>
                      <Text style={styles.bodyText}>{item.body}</Text>
                    </View>
                  );
                }}
                itemSeparatorComponent={() => <View style={{ height: 16 }} />}
                listEmptyComponent={() => (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>No data available</Text>
                  </View>
                )}
                ListEmptyComponent={
                  <Text style={styles.emptyList}> no lists found</Text>
                }
                ListHeaderComponent={
                  <Text style={styles.headerText}> Lists</Text>
                }
                ListFooterComponent={
                  <Text style={styles.footerText}> List is end</Text>
                }
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            </View>
          </>)}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0", // Subtle light gray instead of default harsh black
    marginBottom: 12, // Essential for spacing between items in a list

    // iOS Shadow
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,

    // Android Shadow
    elevation: 2,
  },

  titleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a", // Deep slate rather than pure harsh #000
    lineHeight: 22,
    marginBottom: 8,
  },

  bodyText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#475569", // Muted slate for clean visual hierarchy
    lineHeight: 20,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
  footerText: {
    fontSize: 25,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
  emptyList: {
    fontSize: 25,
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
  loadingContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 12,
    gap: 12, // Native flex gap supported in modern React Native
    // Elevation & Shadows
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 16,
    color: "#0F172A",
    backgroundColor: "#F8FAFC",
  },
  // Use a dedicated style if your body input is multiline
  bodyInput: {
    minHeight: 96,
    textAlignVertical: "top", // Critical for Android multiline
    paddingTop: 12,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF2F2', // Soft red-50 tint
    borderWidth: 1,
    borderColor: '#FECACA', // Crisp red-200 border
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    gap: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#EF4444',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  errorText: {
    flex: 1, // Allows long errors to wrap cleanly without overflowing
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: '#B91C1C', // Dark legible red-700
  },
});
