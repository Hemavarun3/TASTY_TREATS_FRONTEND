import React from 'react';

const RowComponent = ({name ,quantity }, index) => {
    return (
        <div className='flex w-full'>
            <div className='w-1/2'>
                {name}
            </div>
            <div className='w-1/2'>
                {quantity}
            </div>
        </div>
    );
}

export default RowComponent;
