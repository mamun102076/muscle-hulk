import React from 'react';
import './Theory.css'
const Theory = () => {
    return (
        <div className='theory'>
            <h1><u>Question-Answer</u></h1>
            <div>
                <p className='theory-name'>1 - How does react work</p>
                <p className='theory-details'>ans : ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <p className='theory-name'>2 - Differnce between props and state</p>
                <p className='theory-details'>ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div>
                <p className='theory-name'>3 - What use effect do without data loading</p>
                <p className='theory-details'>ans: 
                1)validating input field
                2)live filtering
                3)trigger animation on new array value</p>
            </div>
        </div>
    );
};

export default Theory;