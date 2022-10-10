import React from 'react';
import Options from './Options';
import './Questions.css';

const Questions = ({ questions }) => {

    const { id, question, options, correctAnswer } = questions;

    return (
        <div className='all-question mt-8'>
            <p dangerouslySetInnerHTML={{__html: question}}></p>
            <div className='grid grid-cols-2'>
                {
                    options.map((option, idx) => <Options key={idx} option={option}></Options>)
                }
            </div>
        </div>
    );
};

export default Questions;