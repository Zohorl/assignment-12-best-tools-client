import React from 'react';
import AddReview from './AddReview';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import SpecialLook from './SpecialLook';
import Summary from './Summary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-7xl mx-12'>
                <Services></Services>
                <Tools></Tools>
                <Info></Info>
                <AddReview></AddReview>
                <SpecialLook></SpecialLook>
                <Summary></Summary>
            </div>
        </div>
    );
};

export default Home;