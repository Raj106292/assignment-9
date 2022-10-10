import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';

const Topics = () => {

    const getQuestionData = useLoaderData();
    const getAllData = getQuestionData.data;
    const getQuestions = getAllData.questions;

    return (
        <div>
            <img className='w-12 mx-auto bg-black mt-4' src={getAllData.logo} alt='' /> 
            <h2 className='text-2xl text-center mt-4 font-bold'>Topics: {getAllData.name}</h2>
            <p className='text-center mt-4 font-bold'>Total Questions: {getAllData.total}</p>
           {
            getQuestions.map(questions => <Questions key={questions.id} questions={questions}></Questions>)
           }
        </div>
    );
};

export default Topics;