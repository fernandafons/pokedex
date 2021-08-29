import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchBox = ({pokemons, setPokemons, searchChange}) => {
    // const handleChange = (e) => {
    //     setPokemons(initialPokeList)
    //     console.log("initialPokeList")
    //     console.log(initialPokeList)
    //     const filtered = e.target.value.toLowerCase()
    //     const pokemonsFiltered = pokemons.filter(pokemon => (pokemon.name.toLowerCase().includes(filtered) || pokemon.num == filtered))
    //     console.log(pokemonsFiltered)
    //     setPokemons(pokemonsFiltered)
    // }

    return(
        <View style={styles.seachbar}>
            <Text style={styles.text}>Name or Number</Text><br/>
            <View style={styles.searchinput}>
            <input 
                type='search' 
                // placeholder='search pokemons'
                onChange ={searchChange}
            />
            </View>
        </View>
    )
};

const styles=StyleSheet.create({
    seachbar: {
        paddingLeft: 40,
        paddingTop: 20,
        backgroundColor: '#2e2e2e',
        height: 120,
        
    },
    text: {
        color: '#ffffff',
        // fontWeight: 'bold',
        fontSize: 30
    },
    searchinput: {
        width: 200,
        height: 100
    }
});

export default SearchBox;