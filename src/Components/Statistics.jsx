import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {

    const allQuizData = useLoaderData();
    const quizData = allQuizData.data;
    console.log(quizData);

    return (
        <div className='mt-12 mx-auto w-1/2'>
            <LineChart width={600} height={300} data={quizData} margin={{ top: 50, right: 20, bottom: 0, left: 0 }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;