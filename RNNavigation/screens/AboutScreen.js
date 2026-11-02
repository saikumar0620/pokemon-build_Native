import { View, Text ,StyleSheet,Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function AboutScreen({ route }) {
  const {name}=route.params
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button title='goto home ' onPress={()=> navigation.navigate("Home")}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {flex:1,alignItems:"center",justifyContent:"center"},
  text:{fontSize:24,fontWeight:"bold",marginBottom:16}
})
