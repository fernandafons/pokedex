import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchBox = ({pokemons, setPokemons}) => {
    const handleChange = (e) => {
        const filtered = e.target.value.toLowerCase()
        console.log("pokemons")
        console.log(pokemons)
        console.log(filtered)
        const pokemonsFiltered = pokemons.filter(pokemon => (pokemon.name.toLowerCase() == filtered ||pokemon.num == filtered))
        console.log(pokemonsFiltered)
    }
    console.log("!!!!!!!!!!!")
    console.log(pokemons)
    return(
        <View style={styles.seachbar}>
            <Text style={styles.text}>Name or Number</Text><br/>
            <View style={styles.searchinput}>
            <input 
                type='search' 
                // placeholder='search pokemons'
                onChange={handleChange}
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