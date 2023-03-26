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


// const dataStorage = (id) => {
//     const quantity = localStorage.getItem(id);
//     if (quantity) {
//         const newQuantity = +quantity + 1;
//         localStorage.setItem(id, newQuantity)
//     }
//     else {
//         localStorage.setItem(id, 1)
//     }
// }
// const dataStorage = (id) => {
//     let shoppingCart = {}
//     const storedCard = localStorage.getItem('shopping-cart');
//     if (storedCard) {
//         shoppingCart = JSON.parse(storedCard);
//         if (shoppingCart[id]) {
//             shoppingCart[id] = shoppingCart[id] + 1;
//             localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
//         }
//         else {
//             shoppingCart[id] = 1;
//             localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
//         }
//     }
//     else {
//         shoppingCart[id] = 1;
//         localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
//     }
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
export { dataStorage }