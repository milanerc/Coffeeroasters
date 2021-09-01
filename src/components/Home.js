import React from 'react';
import HomeBanner from './HomeBanner';
import HomeCollection from './HomeCollection';
import HomeWhyUs from './HomeWhyUs';
import HowItWorks from './HowItWorks';

const Home = () => {
    return (
        <div className='px-6 sm:px-20'>
            <HomeBanner />
            <HomeCollection />
            <HomeWhyUs />
            <HowItWorks />
        </div>
    )
}

export default Home
