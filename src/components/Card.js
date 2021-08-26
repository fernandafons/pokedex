import React from 'react';
import {Text, View} from 'react-native';
const Card = (props) => {
    console.log(props)
    return (
        <View>
            <Text>{props.results}</Text>
            {/* insert Flatlist here */}
        </View>
    )
};

export default Card;