const dataStorage = id => {
    const getCartItem = localStorage.getItem(id);
    if (getCartItem) {
        const newCartItem = +getCartItem + 1;
        localStorage.setItem(id, newCartItem)
    }
    else {
        localStorage.setItem(id, 1)
    }
}

export { dataStorage }