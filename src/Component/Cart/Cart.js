import React from 'react';
import man from '../../images/man.JPG'
import './Cart.css'
const Cart = () => {
    return (
        <div className='cart'>
            <div className='cart-profile'>
                <img src={man} alt="" />
                <div>
                    <p>Zahid Hossain</p>
                    <p>Sydney, Australia</p>
                </div>
            </div>
            <div className='cart-info'>
                <div>
                    <h4>75kg</h4>
                    <p>Weight</p>
                </div>
                <div>
                    <h4>6.5</h4>
                    <p>Height</p>
                </div>
                <div>
                    <h4>25yrs</h4>
                    <p>Age</p>
                </div>
            </div>
            <p>Add A Break</p>
            <div className='break-count'>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>
            <p>Exercise Details</p>
            <div className='exercise-info'>
                <div>Exercise time</div>
                <div>200 seconds</div>
            </div>
            <div className='break-info'>
                <div>Break time</div>
                <div>15 seconds</div>
            </div>
            <button className='cart-btn'>
                <p>Total Activity</p>
            </button>
        </div>
    );
};

export default Cart;