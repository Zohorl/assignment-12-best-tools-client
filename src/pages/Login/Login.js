import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();


    // const [token] = useToken(user || gUser);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        // tooken pele user and gUser er jaigai token hobe...r dependency teo token hobe
        if (user || gUser) {
            navigate(from, { replace: true });
        }
    }, [user || gUser, from, navigate]);

    if (loading || gLoading) {
        return <Loading></Loading>
    }
    let signInError;
    if (error || gError) {
        signInError = <p className='text-red-600'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        // console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-semibold text-2xl">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder='Your Email'
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /^[a-z0-9][-a-z0-9._]+@([-a-z0-9]+\.)+[a-z]{2,5}$/,
                                        message: 'Please provide a valid email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder='Password'
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    pattern: {
                                        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
                                        message: 'Should contain at least 8 (one uppercase ,one lowercase ,one digit, one special character)'
                                    }
                                })}
                            />

                            <label className="label">

                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInError}
                        <input type="submit" value="LOGIN" className="btn w-full max-w-xs text-white" />
                    </form>
                    <p><small>New to Best Tool ? <Link className='text-secondary' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>

                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline uppercase"
                    >Continue With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;