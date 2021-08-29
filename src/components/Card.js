import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

const Card = ({ name, num, type, img}) => {
    // console.log(img)
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* <img src={img} /> */}
            <div>
                <View style={styles.card}>
                <Image
                    style={styles.img}
                    source={{
                    uri: img,
                }}/>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.num}>#{num}</Text>
                <Text style={styles.type}>{type} </Text>
                </View>
                {/* <p>{num}</p>
                <p>{type}</p> */}
            </div>
        </div>
    );
}

const styles=StyleSheet.create({
    card: {
        padding: 20,
        backgroundColor: '#d9d9d9',
        margin: 5,
        borderRadius: 20,
        flexWrap: 'nowrap',
    },

    name: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    img: {
        width: 200,
        height: 200,
      },
    num: {
        fontSize: 16
    },
    type: {

    }
});

export default Card;