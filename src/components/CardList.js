import React from 'react';
import GetPokemon from './ApiConn';
import Card from './Card';

const CardList = ({ pokemons }) => {
    return (
        <div>
          {
            GetPokemon.map((i) => {
                return (
                    <Card 
                        key={i} 
                        id={pokemons[i].id} 
                        name={pokemons[i].name} 
                        type={pokemons[i].type} 
                        />
                    );
                })
          }  
        </div>
    );
}

export default CardList;