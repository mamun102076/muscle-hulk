import React from 'react';
import './Product.css'
const Product = ({product}) => {
    console.log(product)
    return (
        <div className='product'>
            <img src={product.img} alt="" />
            <div>
                <h4>{product.name}</h4>
                <p>{product.Text}</p>
                <p>Age: {product.Age}</p>
                <p>Time: {product.Time}</p>
            </div>
            <button>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Product;