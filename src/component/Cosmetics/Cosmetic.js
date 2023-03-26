import React from 'react';
import { add } from '../Utility/Utility';
// import add from '../Utility/Utility';

const Cosmetic = () => {
    const first = 20;
    const second = 10;
    const total = add(first, second)
    return (
        <div>
            <h1>Welcome to cosmetics projects</h1>
            <p>Total: {total}</p>
        </div>
    );
};

export default Cosmetic;