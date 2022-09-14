import React from 'react';

export const BeerImage = ({ url }) => {
    return (
        <div className='beer-image'>
            <img src={url} alt='beer' />
        </div>
    )
}