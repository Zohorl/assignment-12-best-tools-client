import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    return (
        <div>
            <h2 className='text-center'>Purchese Here</h2>
        </div>
    );
};

export default Purchase;