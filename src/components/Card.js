import React from 'react';

const Card = ({ name, type, img}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="pokemon" src={img} />
            <div>
                <h2>{name}</h2>
                <p>{type}</p>
            </div>
        </div>
    );
}

export default Card;