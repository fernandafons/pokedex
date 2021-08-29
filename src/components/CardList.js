import { View, Text, StyleSheet, Image } from 'react-native';
// import ApiConn from './ApiConn';
import React, { useState, useEffect } from 'react';

// const CardList = ({pokemons}) => {
//     // const [pokemons, setPokemons] = useState([])


//     // useEffect(async () => {
//     //     const response = await fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
//     //     const data = await response.json();
//     //     const pokemonList = data.pokemon;
//     //     // console.log(pokemonList)
//     //     setPokemons(pokemonList);
//     // }, []);

//     return (
//         <View style={styles.container}>  
//             {pokemons.map(pokemon => (
//                 <View style={styles.card}>
//                     <Image
//                         style={styles.img}
//                         source={{
//                         uri: pokemon.img,
//                     }}/>
//                     <Text key={pokemon.id}>#{pokemon.num}</Text>
//                     <Text key={pokemon.id} style={styles.name}>{pokemon.name}</Text>
//                     <Text key={pokemon.id}>{pokemon.type} </Text>
//                 </View>
//             ))}
//         </View>
//     )
// };

// const styles=StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         padding: 20,
//         justifyContent: 'center',
//         // alignContent: 'center',
//         flex: 1,
//         // backgroundColor: 'red'
//     },
//     name: {
//         fontSize: 22,
//         fontWeight: 'bold'
//     },
//     card: {
//         padding: 20,
//         backgroundColor: '#d9d9d9',
//         margin: 5,
//         borderRadius: 20
//     },
//     text: {
//         color: '#f3f2f5',
//         fontWeight: 'bold',
//         fontSize: 30
//         },
//         img: {
//           width: 200,
//           height: 200,
//         },
//         logo: {
//           width: 66,
//           height: 58,
//         },
//       });

// export default CardList;


// import React from 'react';
import Card from './Card';

const CardList = ({ pokemons }) => {
    return (
        <div>
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
        </div>
    );
}

export default CardList;