import React from 'react';

const Card = ({ name, num, type, img}) => {
    // console.log(img)
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={img} />
            <div>
                <h2>{name}</h2>
                <p>{num}</p>
                <p>{type}</p>
            </div>
        </div>
    );
}

export default Card;