import React from 'react';

const SpecialLook = () => {
    return (
        <div className='mt-28'>
            <h2 className='text-center text-4xl mb-6 font-bold'>Special Looks</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/fvT4qT4/special.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Power Beyond Belief</h1>
                        <p className="py-6 text-xl"> Performance of gas without the noise,fuss and fumes</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialLook;