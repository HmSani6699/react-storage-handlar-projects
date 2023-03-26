import React from 'react';

const Cosmetics = () => {
    const cosmetics = [
        { id: 1, name: "Alta", price: 100 },
        { id: 2, name: "malta", price: 200 },
        { id: 3, name: "palta", price: 300 },
        { id: 4, name: "nalta", price: 400 },
        { id: 5, name: "salta", price: 500 }
    ]
    return (
        <div>
            <h1>Hallo cosmetics laver</h1>
            {
                cosmetics.map(cosmetic => console.log(cosmetic))
            }
        </div>
    );
};

export default Cosmetics;