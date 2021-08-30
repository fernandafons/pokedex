import React from 'react';
import { View } from 'react-native';

const Scroll = (props) => {
    return (
            <View style={{overflow: 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}
            </View>
    );
};

export default Scroll;