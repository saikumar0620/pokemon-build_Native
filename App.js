
import { StyleSheet, Text, View,Platform } from 'react-native';
import PokemonCard from './components/PokemonCard';
import { SafeAreaProvider,SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';


export default function App() {
  const charmanderData = {
      name: 'Charmander',
      type: 'Fire',
      image: require('./assets/charmander.png'),
      hp: 39,
      moves: ["Scratch", "Ember", "Growl", "Smokescreen"],
      weaknesses: ["Water", "Ground", "Rock"],
  }
  
  const bulbasaurData = {
      name: 'Bulbasaur',
      type: 'Grass',
      image: require('./assets/bulbasaur.png'),
      hp: 45,
      moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
      weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  }
  
  const squirtleData = {
      name: 'Squirtle',
      type: 'Water',
      image: require('./assets/squirtle.png'),
      hp: 44,
      moves: ["Tackle", "Water Gun", "Tail Whip", "Bubble"],
      weaknesses: ["Electric", "Grass"],
  } 
  const pikachuData = {
      name: 'Pikachu',
      type: 'Electric',
      image: require('./assets/pikachu.png'),
      hp: 35,
      moves: ["Quick Attack", "Thunder Shock", "Tail Whip", "Thunder Wave"],
      weaknesses: ["Ground"],
  } 

  return (
    
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
          <PokemonCard {...charmanderData} />
          <PokemonCard {...bulbasaurData} />
          <PokemonCard {...squirtleData} />
          <PokemonCard {...pikachuData} />
        </ScrollView>
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
