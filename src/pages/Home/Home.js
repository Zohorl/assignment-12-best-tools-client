import React from 'react';
import Banner from './Banner';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl mx-auto mx-12'>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;