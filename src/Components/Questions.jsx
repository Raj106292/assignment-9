import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Options from './Options';
import './Questions.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ questions }) => {

    const { question, options, correctAnswer } = questions;

    const showAnswer = () => {
       toast(correctAnswer);
    }

    return (
        <div className='all-question mt-8 rounded-md'>
            <div className='flex justify-between items-center'>
                <p className='font-bold' dangerouslySetInnerHTML={{ __html: question }}></p>
                <button onClick={showAnswer} className='w-4'><EyeIcon></EyeIcon></button>    
            </div>
            <div className='grid grid-cols-2'>
                {
                    options.map((option, idx) => <Options
                        key={idx}
                        option={option}
                        correctAnswer={correctAnswer}></Options>)
                }
            </div>
            <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />
        </div>
    );
};

export default Questions;