import { View, Text, StyleSheet, Platform, Image } from 'react-native'
import React from 'react'

export default function PokemonCard({ 
  name, 
  type, 
  image, 
  hp, 
  moves , 
  weaknesses 
}) {
  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️ {hp}</Text>
      </View>

      <Image 
        source={image} 
        style={styles.image} 
        accessibilityLabel={`${name} pokemon`} 
        resizeMode="contain"
      />
      
      <View style={styles.typeContainer}>
        <Text style={styles.typeBadge}>{type}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Moves:</Text>
        <Text style={styles.sectionBody}>{moves.join(', ')}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Weaknesses:</Text>
        <Text style={styles.sectionBody}>{weaknesses.join(', ')}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    margin: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a202c',
  },
  hp: {
    fontSize: 16,
    fontWeight: '600',
    color: '#e53e3e',
  },
  image: {
    width: '100%',
    height: 150,
    alignSelf: 'center',
    marginVertical: 8,
  },
  typeContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  typeBadge: {
    backgroundColor: '#edf2f7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    fontWeight: '600',
    color: '#4a5568',
    textTransform: 'capitalize',
  },
  sectionContainer: {
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#2d3748',
  },
  sectionBody: {
    fontSize: 14,
    color: '#718096',
    marginTop: 2,
  },
})