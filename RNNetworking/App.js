
import {StatusBar,StyleSheet,Text,View ,FlatList} from 'react-native';
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
          <FlatList
            data={postList}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text>{ item.title}</Text>
                  <Text>{ item.body}</Text>
                  <View />
              )
            }}
               </View>
                />
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
