import React from 'react';
import '../../App.css';

function CardComponent({ html }) {
    return (
        <div
            className='card-component'
            dangerouslySetInnerHTML={{__html: html }}
        />
    )
}

export default CardComponent;
