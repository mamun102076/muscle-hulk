import Product from '../Product/Product';
import logo from '../../images/logo.jpg'
import './Shop.css'
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [product,setProduct] = useState([])
    const [cart,setCart] = useState([])
    useEffect(() => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    const handleTime = (product) => {
        const newCart = [...cart,product]
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <div className='product-logo'>
                    <img src={logo} alt=""/>
                    <p>Muscle Hulk</p>
                </div>
                <div className='single-product-item'>
                {
                    product.map((product)=><Product key={product.id} product={product} handleTime={handleTime}></Product>)
                }
                </div>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;