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
        // margin: 30,
        paddingLeft: 40,
        paddingTop: 10,
        backgroundColor: '#696969',
        // flex: 1,
        // flexDirection: 'row',
        height: 100,
        
    },
    text: {
        color: '#ffffff'
    },
    searchinput: {
        width: 100
    }
});

export default SearchBox;