import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetPokemon from './src/components/ApiConn';

import React, { useState, useEffect } from 'react';
import CardList from './src/components/CardList';
import SearchBox from './src/components/SearchBox';
import Scroll from './src/components/Scroll';
// import './App.css';  

// function App() {
//     const [pokemons, setPokemons] = useState([]);
//     const [searchfield, setSearchfield] = useState('');
//     // pokemons => setPokemons(GetPokemon);
//     // setPokemons = GetPokemon();
    
//     // useEffect(()=> {
//     //     fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
//     //     .then(response=> response.json())
//     //     .then(pokemons => setPokemons(GetPokemon));
//     //     },[])
        
//         const onSearchChange = (event) => {
//             setSearchfield(event.target.value)
//         }
        
//         console.log("!!!!!!!!!!!!")
//         console.log(pokemons, searchfield)
//         const filteredPokemons = pokemons.filter(pokemon => {
//             return pokemon.name.toLowerCase().includes(searchfield.toLowerCase());
//         })
//         // return !pokemons.length ? <h1 className='tc'>Loading</h1> :
//         return(
        
//             <div className='tc' >
//             <h1 className='f2' >Pokemons</h1>
//             <SearchBox searchChange={onSearchChange} />
//             <Scroll>
//                 <CardList pokemons={filteredPokemons}/>
//             </Scroll>
//         </div>
//     );
// }

// export default App;

export default function App() {
  return (
    <View style={styles.container}>
      {/* {function print() {
        for (let i = 0; i < GetPokemon; i++) {
          console.log(i);
        }
      }
    } */}
        
      <GetPokemon/>
      <StatusBar style="auto" />
    </View>
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
