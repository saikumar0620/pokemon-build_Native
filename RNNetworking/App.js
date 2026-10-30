import { StatusBar, StyleSheet, Text, View, FlatList,ActivityIndicator } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading,setIsLoading]= useState(true)
  const fetchdata = async (limit = 10) => {
    const resonse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
    );
    const data = await resonse.json();
    setPostList(data);
    setIsLoading(false)
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
    )
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>No data available</Text>
            </View>
          )}
          ListHeaderComponent={<Text style={styles.headerText} > Lists</Text>}
          ListFooterComponent={<Text style={styles.footerText}> List is end</Text>}
        />
          
        </View>
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
  backgroundColor: '#ffffff',
  padding: 16,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: '#e2e8f0', // Subtle light gray instead of default harsh black
  marginBottom: 12, // Essential for spacing between items in a list

  // iOS Shadow
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.05,
  shadowRadius: 6,

  // Android Shadow
  elevation: 2,
},

titleText: {
  fontSize: 16,
  fontWeight: '600',
  color: '#0f172a', // Deep slate rather than pure harsh #000
  lineHeight: 22,
  marginBottom: 8,
},

bodyText: {
  fontSize: 14,
  fontWeight: '400',
  color: '#475569', // Muted slate for clean visual hierarchy
  lineHeight: 20,
  },
 headerText: {
    fontSize: 24,
   textAlign: 'center',
   borderWidth: 1,
  borderRadius: 10,

    
  },
  footerText: {
     fontSize: 25,
    textAlign: 'center',
     borderWidth: 1,
  borderRadius: 10
  },
  loadingContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems:"center"
  }
});
