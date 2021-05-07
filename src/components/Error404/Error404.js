import React from 'react';
import error404 from '../assets/Error404.png';

const Error404 = () => {
  return (
    <div>
      <img src={error404} alt='Error' className='error-img'/>
    </div>
  );
};

export default Error404;
