import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

const Card = ({ name, num, type, img}) => {

    const listTypes = type.map(function(typeItem) {
        if (typeItem == "Fire") {
            return <li style={{display: 'inline', backgroundColor: '#ed5564', paddingLeft: 10, paddingRight: 10, borderRadius: 10, paddingBottom: 3, paddingTop: 3}}>{typeItem}</li>
        } else if (typeItem == "Grass") {
            return <li style={{display: 'inline', backgroundColor: '#a0d568', paddingLeft: 10, paddingRight: 10, borderRadius: 10, paddingBottom: 3, paddingTop: 3}}>{typeItem}</li>
        } else if (typeItem == "Poison") {
            return <li style={{display: 'inline', backgroundColor: '#ac92eb', paddingLeft: 10, paddingRight: 10, borderRadius: 10, paddingBottom: 3, paddingTop: 3}}>{typeItem}</li>
        } else {
            return <li style={{display: 'inline', backgroundColor: '#4fc1e8', paddingLeft: 10, paddingRight: 10, borderRadius: 10, paddingBottom: 3, paddingTop: 3}}>{typeItem}</li>
        }
    })
    
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <View style={styles.card}>
                <Text style={styles.num}>#{num}</Text>
                <Image
                    style={styles.img}
                    source={{
                    uri: img,
                }}/>
                <Text style={styles.name}>{name}</Text>
                <View style={styles.typeContainer}>
                    <ul style={{ listStyleType: "none", listStyle: "none" }}>{listTypes}</ul></View>
                </View>
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
        fontWeight: 'bold',
        textAlign: 'center'
    },
    img: {
        width: 200,
        height: 200,
      },
    num: {
        fontSize: 16
    },
    type: {
        backgroundColor: 'red'
    },
    typeContainer: {
        flexDirection: 'row', 
        alignSelf: 'flex-start',
        flexWrap:  'wrap',
        alignItems: 'center'
    }
});

export default Card;