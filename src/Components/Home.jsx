import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizData from './QuizData';
import './Home.css';

const Home = () => {

    const allQuizData = useLoaderData();
    const quizData = allQuizData.data;

    return (
        <div className='my-4 mx-8'>
            <h2 className='text-3xl font-bold text-blue-500'>Welcome to Motion Quiz</h2>
            <p className='mt-4 p-4 border-2 rounded-md'>Motion Quiz is a quiz website for the beginners of web developer. It provides you some valuable question of Important topics like: React, JavaScript, HTML, Github etc.</p>
            <div className='quiz mt-6'>
                {
                    quizData.map(quiz => <QuizData key={quiz.id} quiz={quiz}></QuizData>)
                }
            </div>
        </div>
    );
};

export default Home;