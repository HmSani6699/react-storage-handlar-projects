import React from 'react';
const cosmetic = {
    border: '2px solid gray',
    margin: "20px",
    borderRadius: '20px',
    backgroundColor: 'cadetblue'
}

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    return (
        <div style={cosmetic}>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>it has id: {id}</small></p>
        </div>
    );
};

export default Cosmetic;