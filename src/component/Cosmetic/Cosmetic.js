import React from 'react';
import { dataStorage, removeDb } from '../Storage/Storage';
import './Cosmetic.css'
const cosmetic = {
    border: '2px solid gray',
    margin: "20px",
    borderRadius: '20px',
    backgroundColor: 'cadetblue',
    padding: '20px'
}
const addBtnStyle = {
    padding: '8px 15px',
    borderRadius: '15px',
    border: '2px solid gray',
    backgroundColor: 'orange',
    color: 'white',
    cursor: 'pointer'
}
const removeBtnStyle = {
    padding: '8px 15px',
    borderRadius: '15px',
    border: '2px solid gray',
    backgroundColor: 'red',
    color: 'white',
    cursor: 'pointer'
}

// const addButton = (id) => dataStorage(id);

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    // const addToCart = () => addButton(id);
    return (
        <div style={cosmetic}>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>it has id: {id}</small></p>
            <button onClick={() => dataStorage(id)} style={addBtnStyle}>Add to cart</button>

            <button onClick={() => removeDb(id)} style={removeBtnStyle}>Remove cart</button>
        </div>
    );
};



export default Cosmetic;