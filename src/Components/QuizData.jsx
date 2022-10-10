import React from 'react';
import './QuizData.css';

const QuizData = ({ quiz }) => {

    const { logo, name, total } = quiz;

    return (
        <div className='quiz-section'>
            <img src={logo} alt="" />
            <div className='flex justify-between items-center'>
                <div className='font-bold'>
                    <p>Project: {name}</p>
                    <p>Total: {total}</p>
                </div>
                <div className='start-btn font-bold'>
                    <button>Get Start</button>
                </div>
            </div>
        </div>
    );
};

export default QuizData;