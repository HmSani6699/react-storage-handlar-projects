import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import { totalReduce } from '../Utility/Utility';

const Cosmetics = () => {
    // const cosmetics = [
    //     { id: 1, name: "Alta", price: 100 },
    //     { id: 2, name: "malta", price: 200 },
    //     { id: 3, name: "palta", price: 300 },
    //     { id: 4, name: "nalta", price: 400 },
    //     { id: 5, name: "salta", price: 500 }
    // ]
    // const cosmetics = [
    //     {
    //         "id": "641fe093c3e6522c13660699",
    //         "price": 22,
    //         "name": "Gibson Mcneil"
    //     },
    //     {
    //         "id": "641fe0935c44a77ae49ed228",
    //         "price": 27,
    //         "name": "Susanne Morris"
    //     },
    //     {
    //         "id": "641fe09392ece2abf2ba5b5b",
    //         "price": 25,
    //         "name": "Sloan Cantu"
    //     },
    //     {
    //         "id": "641fe093d8047120a2a76a9f",
    //         "price": 29,
    //         "name": "Wong Wilcox"
    //     },
    //     {
    //         "id": "641fe093c6c7580e75ba5f92",
    //         "price": 27,
    //         "name": "Walsh Parsons"
    //     }
    // ];
    const [cosmetics, setCosmetics] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
    return (
        <div>
            <h1>Hallo cosmetics laver</h1>
            <p>all cosmetics price: {totalReduce(cosmetics)}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;