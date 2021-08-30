import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React, { useState, useEffect } from 'react';
import CardList from './src/components/CardList';
import SearchBox from './src/components/SearchBox';
import Scroll from './src/components/Scroll';

export default function App() {
  const [pokemons, setPokemons] = useState([])
  const [searchfield, setSearchfield] = useState('');
  useEffect(async () => {
    const response = await fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
    const data = await response.json();
    const pokemonList = data.pokemon;
    setPokemons(pokemonList);
}, []);

    const onSearchChange = (event) => {
      setSearchfield(event.target.value)
    }

    const pokemonsFiltered = pokemons.filter(pokemon => {
      if (pokemon.name.toLowerCase().includes(searchfield.toLowerCase()) != "")
        return pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
      else 
        return parseInt(pokemon.num) == parseInt(searchfield);
    })
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>
      <SearchBox
        pokemons={pokemons}
        searchChange={onSearchChange}
      />
      <Scroll>
        <CardList pokemons={pokemonsFiltered}/>
      </Scroll>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  title: {
    height: 50,
    paddingLeft: 40,
    paddingTop: 20,
    fontFamily: 'arial',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#696969'
  }
});
