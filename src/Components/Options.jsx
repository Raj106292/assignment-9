import React from 'react';

const Options = ({ option }) => {
    return (
        <div>
            <button className='bg-white w-3/4 mt-4 mb-2 gap-2 p-2'>
                <input type='radio' /> {option}
            </button>
        </div>
    );
};

export default Options;