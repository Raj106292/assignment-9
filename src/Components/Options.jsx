import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = ({ option, correctAnswer }) => {

    const checkAnswer = (opt) => {
        if( opt === correctAnswer){
            toast("Hurray! the answer is right");
        }
        else{
            toast("Oops! wrong answer");
        }
    }

    return (
        <div>
            <button onClick={() => {checkAnswer(option)}} className='bg-white w-3/4 mt-4 mb-2 gap-2 p-2 rounded'>
                <input type='radio' name='foo' /> {option}
            </button>
            <ToastContainer 
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"/>
        </div>
    );
};

export default Options;