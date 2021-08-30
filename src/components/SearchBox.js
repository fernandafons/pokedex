import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const SearchBox = ({setSearchfield}) => {

    return(
        <View style={styles.seachbar}>
            <Text style={styles.text}>Name or Number</Text>
            <View style={styles.searchinput}>
            <TextInput
                style={{height: 35, backgroundColor: "#fff"}}
                onChangeText={(value) => setSearchfield(value)}
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