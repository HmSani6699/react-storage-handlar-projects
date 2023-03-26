import React from 'react';
import { bag, meinus, multiply } from '../Utility/Utility';


const Shoes = () => {
    const first = 10;
    const second = 5;
    const multi = multiply(first, second);
    const bat = meinus(first, second);
    const a = 20;
    const b = 10;
    const x = bag(a, b);
    return (
        <div>
            <h2>This is shoes component</h2>
            <p>Multiply number: {multi}</p>
            <p>Bat: {bat}</p>
            <p>Bag: {x}</p>
        </div>
    );
};

export default Shoes;