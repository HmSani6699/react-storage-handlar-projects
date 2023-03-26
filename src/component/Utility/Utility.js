const add = (first, second) => {
    return first + second
};

//------single item export--------//
// export default add


//-------- multi line export ---------//

const multiply = (first, second) => {
    return first * second
}


const meinus = (first, second) => {
    return first - second
}



const bag = (first, second) => {
    return first / second
}


// const productPrice = products => {
//     const total = products.reduce((previous, currant) => previous + currant.price, 0);
//     return total
// }
const productPrice = products => {
    const reduce = (previous, currant) => previous + currant.price;
    const total = products.reduce(reduce, 0);
    return total
}

export {
    add,
    multiply,
    meinus,
    bag,
    productPrice as totalReduce
}