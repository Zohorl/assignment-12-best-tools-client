import React from 'react';

import bgImg from '../../assets/images/footer.png';

const Summary = () => {
    return (
        <div
            style={{
                background: `url(${bgImg})`,
                backgroundSize: 'cover'
            }}
            className="my-36"
        >
            <div className='text-center '>
                <h1 className='text-5xl text-primary uppercase'>Millions Business Trust US</h1>
                <h3 className='text-3xl py-4'>Try To Understand User Expectation</h3>
                <p className='divider divider-vertical'></p>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-2'>
                <div class="stats stats-vertical shadow mx-auto">

                    <div class="stat">
                        <div class="stat-title">Countries</div>
                        <div class="stat-value text-primary">72</div>
                    </div>

                    <div class="stat">
                        <div className="stat-title">Complete Projects</div>
                        <div className="stat-value text-secondary">535+</div>
                        <div class="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div class="stat">
                        <div className="stat-title">Happy Clients</div>
                        <div className="stat-value">273+</div>
                    </div>
                    <div class="stat">
                        <div className="stat-title">Feed Backs</div>
                        <div className="stat-value">433+</div>
                    </div>

                </div>
                <div class="stats shadow">
                    <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-3 items-center'>
                        <div className='p-5'>
                            <h1 className='text-xl text-secondary font-semibold'>Have any questions about as or</h1>
                            <h1 className='text-xl text-secondary font-semibold'>get a products request</h1>
                            <h3 className='text-lg font-bold pt-6'>Don't hesitate to contact us</h3>
                        </div>
                        <div >
                            <button class="btn btn-active btn-secondary text-white">Request For Quote</button>
                            <button class="btn btn-active text-white mt-3">Contact US</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;