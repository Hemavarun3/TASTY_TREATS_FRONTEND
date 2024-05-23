import React from 'react';

const Aboutcard = (val) => {
    return (
        <div className='space-y-7 mt-16 p-16'>
        <h3 className='font-semibold text-main2color'>{val.heading}</h3>
        <p>{val.description}</p>
        </div>
    );
}

export default Aboutcard;
