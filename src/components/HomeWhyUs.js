import React from 'react';
import HomeWhyUsItem from './HomeWhyUsItem';
import image1 from '../assets/home/desktop/icon-coffee-bean.svg';
import image2 from '../assets/home/desktop/icon-gift.svg';
import image3 from '../assets/home/desktop/icon-truck.svg';


const HomeWhyUs = () => {
    return (
        <div className='text-center bg-dark_grey pt-4 px-2 lg:pt-24 pb-32 mt-20 pb-80 md:pb-72 lg:pb-80 relative rounded-lg mb-96 md:mb-80 lg:mb-44'>
            <h2 className='text-white'>Why choose us?</h2><br />
            <p className='text-white md:w-1/2 lg:w-1/3 m-auto pb-44 md:pb-12 lg:pb-4'>A large part of our role is choosing which particular coffees will be featured 
                in our range. This means working closely with the best coffee growers to give 
                you a more impactful experience on every level.
            </p>
            <div className='m-auto lg:flex px-2 md:px-20 absolute -mt-40 md:-mt-8 lg:mt-16'>
                <HomeWhyUsItem img={image1} title={'Best quality'} text={'Discover an endless variety of the world’s best artisan coffee from each of our roasters.'}/>
                <HomeWhyUsItem img={image2} title={'Exclusive benefits'} text={'Special offers and swag when you subscribe, including 30% off your first shipment.'}/>
                <HomeWhyUsItem img={image3} title={'Free shipping'} text={'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.'}/>
            </div>
        </div>
    )
}

export default HomeWhyUs
