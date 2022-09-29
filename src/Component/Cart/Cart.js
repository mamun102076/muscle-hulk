import React, { useEffect, useState } from 'react';
import man from '../../images/man.JPG'
import addToLocal from '../../Utilities/localDb';
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = (props) => {
    const [button,setButton] = useState([])
    const notify = () => toast.info("congratulations!!! u have succeed",{
        position: "top-center",
    });
    const clickButton = (event) => {
        const button = event.target.innerText
        setButton(button)
        addToLocal(button)
    }
    useEffect(()=>{
        const adiba = localStorage.getItem('shopping-cart')
        const newCart = []
        newCart.push(adiba)
        setButton(newCart)
    },[])
    const {cart} = props
    let time = 0
    for(let product of cart){
        time = time + product.time
    }
    return (
        <div className='cart'>
            <div className='cart-profile'>
                <img src={man} alt="" />
                <div>
                    <p>Abdullah Al Mamun</p>
                    <p>Georgia,USA</p>
                </div>
            </div>
            <div className='cart-info'>
                <div>
                    <h4>Height : 5.7</h4>
                    <h4>Weight : 60kg</h4>
                    <h4>Age : 31</h4>
                </div>
            </div>
            <p>Break count:</p>
            <div className='break-count'>
                <button onClick={clickButton}>10</button>
                <button onClick={clickButton}>20</button>
                <button onClick={clickButton}>30</button>
                <button onClick={clickButton}>40</button>
                <button onClick={clickButton}>50</button>
            </div>
            <p>Exercise Details:</p>
            <div className='exercise-info'>
                <div>Exercise time</div>
                <div>{time} seconds</div>
            </div>
            <div className='break-info'>
                <div>Break time</div>
                <div>{button} seconds</div>
            </div>
            <button onClick={notify} className='cart-btn'>
                <p>Total Activity</p>
                <ToastContainer></ToastContainer>
            </button>
        </div>
    );
};

export default Cart;