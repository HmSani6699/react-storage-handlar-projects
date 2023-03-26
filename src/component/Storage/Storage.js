//---------cart info save to localStorage-----------//

// const dataStorage = id => {
//     let shoppingCart;
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart)
//     }
//     else {
//         shoppingCart = {}
//     }

//     const getCartItem = shoppingCart[id];
//     if (getCartItem) {
//         const newCartItem = +getCartItem + 1;
//         shoppingCart[id] = newCartItem
//         // localStorage.setItem(id, newCartItem)
//     }
//     else {
//         shoppingCart[id] = 1
//         // localStorage.setItem(id, 1)
//     }

//     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
// }

const dataStorage = (id) => {
    let shoppingCart = {};
    const getCart = localStorage.getItem('shopping-cart');
    if (getCart) {
        shoppingCart = JSON.parse(getCart);
        if (shoppingCart[id]) {
            shoppingCart[id] = shoppingCart[id] + 1;
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        } else {
            shoppingCart[id] = 1;
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    } else {
        shoppingCart[id] = 1;
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }
}

//----------cart info remove to localStorage -----------//

const removeDb = (id) => {
    const getCart = localStorage.getItem('shopping-cart');
    if (getCart) {
        const shoppingCart = JSON.parse(getCart);
        const objKeys = Object.keys(shoppingCart);
        objKeys.find(key => {
            if (key === id) {
                delete shoppingCart[key]
                localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
            }
        })
    }
}


//-------------- single cart info delete -------------//

const deleteItem = (id) => {
    const getCart = localStorage.getItem('shopping-cart');
    if (getCart) {
        const shoppingCart = JSON.parse(getCart);
        const objKeys = Object.keys(shoppingCart);
        objKeys.find(key => {
            if (key === id) {
                if (shoppingCart[id] === 0) {
                    return
                }
                shoppingCart[id] = shoppingCart[id] - 1;
                localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
            }
        })
    }
}

//-------------- full cart react -------------//
const reactButton = () => {
    localStorage.removeItem('shopping-cart')
}

export {
    dataStorage,
    removeDb,
    deleteItem,
    reactButton
}
