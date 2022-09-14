import React from 'react';
import './styles.css';

export const Button = ({ text, onClickHandle }) => {
    return (
        <>
            <button className='button' onClick={onClickHandle}>{text}</button>
        </>
    );
}