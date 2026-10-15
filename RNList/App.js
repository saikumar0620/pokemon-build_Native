import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View,ScrollView } from 'react-native';
import  PokemonList from './data.json';

import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
  <SafeAreaProvider style={styles.container}>
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {PokemonList.map((pokemon) => {
        return (
          <View key={pokemon.id}>
            <Text>{pokemon.name}</Text>
            <Text>{pokemon.type}</Text>
            <Text>{pokemon.hp}</Text>
          </View>
        );
        })}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
