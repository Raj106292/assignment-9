import { FaceFrownIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className='text-center m-8'>
    <FaceFrownIcon className='w-1/2 mx-auto text-gray-500'></FaceFrownIcon>
    <h1 className='text-5xl mb-12'>Oops!- 404 - Not Found!</h1>
    <Link to="/" className='text-2xl text-green-600 font-bold'><u>Go Home</u></Link>
  </div>
);

export default NotFound;