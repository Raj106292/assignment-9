import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from './Questions';

const Topics = () => {

    const getQuestionData = useLoaderData();
    const getAllData = getQuestionData.data;
    const getQuestions = getAllData.questions;
    console.log(getQuestions);

    return (
        <div>
           {
            getQuestions.map(questions => <Questions key={questions.id} questions={questions}></Questions>)
           } 
        </div>
    );
};

export default Topics;