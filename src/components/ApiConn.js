import { FlatList, View } from "react-native";
import Card from './Card';
import React from "react";

const GetPokemon = () => {
    var url = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);

    xhttp.onreadystatechange = function(){
        if ( xhttp.readyState == 4 && xhttp.status == 200 ) {
            // console.log(xhttp.responseText);
            const pokemons = xhttp.responseText;
            // console.log(typeof pokemons)
            let str = pokemons;
            const myArr = str.split(" }, {");
            // console.log(typeof myArr)
            for ( var i = 0 ;i < myArr.length; i++){
                console.log("myArr[i]");
                console.log(myArr[i]);
                    <View>
                        <Card 
                            result={myArr[i]}
                        />
                    </View>
                
                
             }
            // return (
                // <div>
                  {/* <h1>Listar pokemons</h1> */}
                  {/* {myArr.map(pokemon => (
                    <li key={pokemon.show.id}>
                      <h2>
                        <strong>Título: </strong>
                        {pokemon.show.name}
                      </h2>
                      <p>
                        {pokemon.show.img}
                      </p>
          
                    </li>
                  ))} */}
                {/* </div> */}
            //   );
        }
}

xhttp.send();

return xhttp.responseText;
}

export default GetPokemon;