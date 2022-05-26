import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const AddAReview = () => {

    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    // console.log(user);

    const onSubmit = data => {
        // console.log(data);
        const url = 'http://localhost:5000/review';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Review Added');
                reset()
            })
    };

    return (
        <div>

            <h2 className='text-2xl font-bold text-green-400 text-center py-3'>Your valuable Review will encourage Us</h2>

            <form className='grid grid-cols-1 gap-2 justify-items-center' onSubmit={handleSubmit(onSubmit)}>

                <input className="input input-bordered w-full max-w-xs" value={user?.displayName} {...register("name")} />
                <input className="input input-bordered w-full max-w-xs" placeholder='Rating out of 5' type="number" {...register("rating")} />
                <textarea className="input input-bordered w-full max-w-xs" placeholder='Description' {...register("description")} />

                <input type="submit" className="btn btn-primary  max-w-xs" value="Add Review" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddAReview;