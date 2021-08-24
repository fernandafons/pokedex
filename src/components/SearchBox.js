import React from 'react';
import {Text} from 'react-native';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className='pa2' >
            <Text>Name or Number</Text><br/>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search pokemons'
                onChange={searchChange}
                />
        </div>
    );
}

export default SearchBox;