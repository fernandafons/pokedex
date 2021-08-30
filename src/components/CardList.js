import { View, StyleSheet } from 'react-native';
import React from 'react';
import Card from './Card';

const CardList = ({ pokemons }) => {
    return (
        <View style={styles.container}>
          {
            pokemons.map((user, i) => {
                return (
                    <Card 
                        key={i} 
                        num={pokemons[i].num} 
                        name={pokemons[i].name} 
                        img={pokemons[i].img} 
                        type={pokemons[i].type} 
                        />
                    );
                })
          }  
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20,
        justifyContent: 'center',
        flex: 1,
    },
});
export default CardList;