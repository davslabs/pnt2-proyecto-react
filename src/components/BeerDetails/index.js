import React from 'react';
import './styles.css';

export const BeerDetails = ({ title, type, abv}) => {
    return (
        <div className='beer-details'>
            <h1>{title}</h1>
            <h3>{type}</h3>
            <h4>{abv}</h4>
        </div>
    );
}