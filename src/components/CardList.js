// import React from 'react';
// import GetPokemon from './ApiConn';
import Card from './Card';

// const CardList = ({ pokemons }) => {
//     return (
//         <div>
//           {
//             GetPokemon.map((i) => {
//                 return (
//                     <Card 
//                         key={i} 
//                         id={pokemons[i].id} 
//                         name={pokemons[i].name} 
//                         type={pokemons[i].type} 
//                         />
//                     );
//                 })
//           }  
//         </div>
//     );
// }

// export default CardList;

import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ApiConn from './ApiConn';

const CardList = () => {
    const GetPokemons = async () => {
        const response = await ApiConn.get();
        console.log(response.data)
        return response.data
    };

    // const results = GetPokemons();
    const [results, setResults] = useState([]);
    return (
        <View>
            <Card 
                results={results}
            />
        </View>
    )
};

export default CardList;
