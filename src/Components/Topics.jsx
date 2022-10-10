import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Topics = () => {

    const getData = useLoaderData();

    return (
        <div>
            <h3>Hello From Topics</h3>
        </div>
    );
};

export default Topics;