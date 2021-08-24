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
        }
}

xhttp.send();

return xhttp.responseText;
}

export default GetPokemon;