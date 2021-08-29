import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import GetPokemon from './src/components/ApiConn';

import React, { useState, useEffect } from 'react';
import CardList from './src/components/CardList';
import SearchBox from './src/components/SearchBox';
import ApiConn from './src/components/ApiConn';

export default function App() {
  const [pokemons, setPokemons] = useState([])
  useEffect(async () => {
    const response = await fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
    const data = await response.json();
    const pokemonList = data.pokemon;
    // console.log(pokemonList)
    setPokemons(pokemonList);
}, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>
      <SearchBox
        pokemons={pokemons}
        setPokemons={setPokemons}
      />
      <CardList
        pokemons={pokemons}
      />
      <Text style={styles.title}>!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    // alignItems: 'center',
    // justifyContent: 'center',
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
