import React from 'react';
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
    color: 'white'
}


const addButton = (id) => console.log(id);




const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;
    // const addToCart = () => addButton(id);
    return (
        <div style={cosmetic}>
            <h2>Buy this: {name}</h2>
            <p>Only for: ${price}</p>
            <p><small>it has id: {id}</small></p>
            <button onClick={() => addButton(id)} style={addBtnStyle}>Add to cart</button>
        </div>
    );
};

export default Cosmetic;