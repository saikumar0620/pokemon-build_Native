
import { StyleSheet, Text, View,Platform } from 'react-native';
import PokemonCard from './components/PokemonCard';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  const charmanderData = {
      name: 'Charmander',
      type: 'Fire',
      image: require('./assets/charmander.png'),
      hp: 39,
      moves: ["Scratch", "Ember", "Growl", "Smokescreen"],
      weeknesses: ["Water", "Ground", "Rock"],
    }
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <PokemonCard {...charmanderData} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3ecec',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    
    
  },
});
