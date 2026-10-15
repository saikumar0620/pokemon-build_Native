// import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View,ScrollView,StatusBar } from 'react-native';
import  PokemonList from './data.json';

import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
export default function App() {
  return (
  <SafeAreaProvider style={styles.container}>
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      {/* <ScrollView style={styles.scrollViewContainer}>
        {PokemonList.map((pokemon) => {
        return (
          <View key={pokemon.id} style={styles.card}>
            <Text style={styles.cardText}>{pokemon.name}</Text>
            <Text>{pokemon.type}</Text>
            <Text>{pokemon.hp}</Text>
          </View>
        );
        })}
        </ScrollView> */}

        <FlatList
          data={PokemonList}
          renderItem={({ item }) => {
            // console.log(item.id);
            return (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardText}>{item.name}</Text>
                <Text>{item.type}</Text>
                {/* <Text>{item.hp}</Text> */}
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          itemSeparatorComponent={() => <View style={{ height: 16 }} />}  
        />

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
  },
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
        elevation: 3,
      },
    }),
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    // marginBottom: 8,
  },
});
