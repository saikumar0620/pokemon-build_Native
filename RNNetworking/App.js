
import {StatusBar,StyleSheet,View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function App() {
  const [postList,setPostList]=useState([])
  const fetchdat = async () => {
    const resonse = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=12`)
    const data= await resonse.json()
    
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.listContainer}>
          <Text></Text>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop:StatusBar.currentHeight

  },
  listContainer: {
    flex: 1,
    paddingHorizontal:16
    
  }
});
