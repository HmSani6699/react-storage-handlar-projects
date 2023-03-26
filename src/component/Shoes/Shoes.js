import React from 'react';
import { meinus, multiply } from '../Utility/Utility';


const Shoes = () => {
    const first = 10;
    const second = 5;
    const multi = multiply(first, second);
    const bat = meinus(first, second)
    return (
        <div>
            <h2>This is shoes component</h2>
            <p>Multiply number: {multi}</p>
            <p>Bat: {bat}</p>
        </div>
    );
};

export default Shoes;