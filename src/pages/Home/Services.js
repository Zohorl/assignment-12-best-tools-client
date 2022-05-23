import React from 'react';

const Services = () => {
    return (

        <div className=' mt-36'>
            <h1 className='text-5xl uppercase font-bold text-black text-center mb-7'>Welcome Best Tools</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div class="card   shadow-xl image-full ">
                    <figure><img className='' src="https://i.ibb.co/kmQxX8b/toolblock1.jpg" alt="hand-tool" /></figure>
                    <div class="card-body mt-auto mx-auto">
                        <h2 class="card-title text-3xl ">Hand Tools</h2>
                    </div>
                </div>
                <div class="card  shadow-xl image-full ">
                    <figure><img className='' src="https://i.ibb.co/sKFjBWF/toolblock2.jpg" alt="hand-tool" /></figure>
                    <div class="card-body mt-auto mx-auto">
                        <h2 class="card-title text-3xl ">LAWN MOWERS</h2>
                    </div>
                </div>
                <div class="card   shadow-xl image-full ">
                    <figure><img className='' src="https://i.ibb.co/VWTjs3b/toolblock3.jpg" alt="hand-tool" /></figure>
                    <div class="card-body mt-auto mx-auto">
                        <h2 class="card-title text-3xl ">POWER TOOLS</h2>
                    </div>
                </div>
                <div class="card   shadow-xl image-full ">
                    <figure><img className='' src="https://i.ibb.co/RTq7pFv/toolblock4.jpg" alt="hand-tool" /></figure>
                    <div class="card-body mt-auto mx-auto">
                        <h2 class="card-title text-3xl text-center">CHAINSAWS</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;