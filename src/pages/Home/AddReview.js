import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Review from './Review';

const AddReview = () => {

    const [review, setReview] = useState([]);
    // console.log(review)
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);

    return (
        <div className='mt-44'>
            <h2 className='text-center text-4xl font-bold'>Reviews Here</h2>
            <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
                {
                    review.map(r => <Review
                        key={r._id}
                        r={r}
                    ></Review>)
                }
            </div>

        </div>

    );
};

export default AddReview;