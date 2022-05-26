import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user.displayName)
    return (
        <div>
            <h1 className='text-3xl text-secondary my-4'>My Profile !!!!</h1>
            <div className="mockup-window border bg-base-300">
                <div className="justify-center px-4 py-16 bg-base-200">
                    <h2>Name : {user.displayName}</h2>
                    <p>Email : {user.email}</p>
                    <br />
                    <input type="text" placeholder="Address" className="input input-bordered w-96 max-w-xs" />
                    <br /><br />
                    <input type="number" placeholder="Phone " className="input input-bordered w-96 max-w-xs" />
                </div>
            </div>
        </div>
    );
};

export default MyProfile;