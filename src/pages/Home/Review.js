import React from 'react';

const Review = ({ r }) => {
    // console.log(r)
    return (
        <div className="card w-96 bg-gradient-to-r from-secondary to-primary shadow-xl card-body text-white">
            <p className='font-bold'>Name : {r.name}</p>
            <p className='font-bold'>Rating : {r.rating}</p>
            <p className='font-bold'>Description : {r.description}</p>
        </div>
    );
};

export default Review;