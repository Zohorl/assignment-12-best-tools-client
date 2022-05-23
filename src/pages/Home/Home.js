import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl mx-12'>
                <Services></Services>
                <Info></Info>
            </div>
        </div>
    );
};

export default Home;