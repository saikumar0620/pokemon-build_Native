
import {StatusBar,StyleSheet,Text,View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState , useEffect} from 'react';

export default function App() {
  const [postList,setPostList]=useState([])
  const fetchdata = async (limit = 10) => {
    const resonse = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    const data = await resonse.json()
    setPostList(data)

  }

  useEffect(() => {
    fetchdata()
  }, []);


  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.listContainer}>
          <Text>dbsa</Text>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
    alignItems:"center"

  },
  listContainer: {
    flex: 1,
    paddingHorizontal:16
    
  }
});
