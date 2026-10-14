import { View, Text,StyleSheet,Platform, Image } from 'react-native'
import React from 'react'

export default function PokemonCard({ name, type, image, hp, moves, weeknesses }) {
  return (
    <View style= {styles.card}>
      <View>
        <Text>{name}</Text>
      <Text>HP: {hp}</Text>
      </View>

      <Image source={image} style={{ width: 100, height: 100 }} accessibilityLabel={`${name} pokemon`} />
      
     <View>
      <Text>Type: {type}</Text>
      </View>

      <View>
      <Text>Moves:</Text>
      <Text>{moves.join(', ')}</Text>
      </View>
      <View>
      <Text>Weaknesses:</Text>
      <Text>{weeknesses.join(', ')}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 3,
      },
    })
  }
})