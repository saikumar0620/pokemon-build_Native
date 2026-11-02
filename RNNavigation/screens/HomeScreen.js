import { View, Text ,StyleSheet,Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HomeScreen(route) {

  const navigation= useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <Text style={styles.text}>{route.params?.result || 'No data received'}</Text>
      <Button title='Go to About' onPress={() => navigation.navigate("About")}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {flex:1,alignItems:"center",justifyContent:"center"},
  text:{fontSize:24,fontWeight:"bold",marginBottom:16}
})
