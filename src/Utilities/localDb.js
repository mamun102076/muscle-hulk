const addToLocal = (button) => {
    const storedCart = localStorage.setItem('shopping-cart',button)
    return storedCart
}
export default addToLocal