import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchBox = ({pokemons, setPokemons, searchChange}) => {

    return(
        <View style={styles.seachbar}>
            <Text style={styles.text}>Name or Number</Text><br/>
            <View style={styles.searchinput}>
            <input 
                type='search' 
                style={{height: 35}}
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
        height: 130,
    },
    text: {
        color: '#ffffff',
        fontSize: 30
    },
    searchinput: {
        width: 250,
        height: 100
    }
});

export default SearchBox;