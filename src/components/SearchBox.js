import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <View style={styles.seachbar}>
            <Text style={styles.text}>Name or Number</Text><br/>
            <View style={styles.searchinput}>
            <input 
                type='search' 
                placeholder='search pokemons'
                onChange={searchChange}
                />
            </View>
        </View>
    );
}


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
        // height: 100
    }
});

export default SearchBox;