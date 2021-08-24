import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetPokemon from './src/components/ApiConn';

import React, { useState, useEffect } from 'react';
import CardList from './src/components/CardList';
import SearchBox from './src/components/SearchBox';
import Scroll from './src/components/Scroll';

// import './App.css';  

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>
      <SearchBox/>
      <GetPokemon/>
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
