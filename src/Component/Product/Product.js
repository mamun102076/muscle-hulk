import React from 'react';
import './Product.css'
const Product = ({product,handleTime}) => {
    return (
        <div className='product'>
            <img src={product.image} alt="" />
            <div>
                <h4>{product.name}</h4>
                <p>{product.text}</p>
                <p>Age: {product.age}</p>
                <p>Time: {product.time}s</p>
            </div>
            <button onClick={() => handleTime(product)}>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Product;