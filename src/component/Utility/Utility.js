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

export { add, multiply, meinus }